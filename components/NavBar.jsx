import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Link, Spacer, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import Sticky from "react-stickynode";

import { colors } from "../theme";
import Logo from "./Logo";
import ColorModeButton from "./ColorModeButton";

const navBtns= [
    {
        label: "Home",
    },
    {
        label: "About",
    },
    {
        label: "TimeTable",
    },
    {
        label: "Contact",
    },
];

const MenuToggle = ({ isOpen, onOpen }) => (
    <Box display={{ base: "block", md: "none"}} pr={4}>
        <Button onClick={onOpen}>
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Button>
    </Box>
);

const NavButtons = ({ size, onClose }) => {
    const btns = navBtns.map((btn) => (
        <Button
            key={btn.label}
            size={size}
            variant="link"
            mb={2}
            onClick={onClose}
        >
            {btn.href ? (
                <Link href={btn.href} isExternal>
                    {btn.label}
                </Link>
            ) : (
                <ScrollLink
                    to={btn.label.toLowerCase()}
                    href={btn.href}
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                    onClick={onClose}
                >
                    {btn.label}
                </ScrollLink>
            )}
        </Button>
    ));

    return <>{btns}</>
};

const MenuLinks = ({ onClose }) => (
    <Stack
        display={{ base: "none", sm: "none", md: "block" }}
        width={{ sm: "full", md: "auto" }}
        spacing="24px"
        direction={["column", "row", "row", "row"]}
        alignItems="center"
    >
        <NavButtons size="sm" onClose={onClose} />
        <ColorModeButton mr="12px" />
    </Stack>
);

const NavMenu = ({ isOpen, onClose }) => (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerBody>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        direction={["column"]}
                        spacing="24px"
                        mt="20vh"
                    >
                        <NavButtons size="lg" onClose={onClose} />
                        <ColorModeButton />
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
);

const NavBar = ({ user }) => {
    const primary = useColorModeValue(colors.primary.light, colors.primary.dark);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Sticky enabled innerZ={99}>
            <Stack
                as="header"
                w="100%"
                direction={["row", "row", "row", "row"]}
                alignItems="center"
                justifyContent="center"
                bg={primary}
            >
                <Logo logo={user.image} userLogo={true} user={user} />
                <Spacer />
                <MenuLinks onClose={onClose} />
                <NavMenu isOpen={isOpen} onClose={onClose} />
                <MenuToggle isOpen={isOpen} onOpen={onOpen} />
            </Stack>
        </Sticky>
    );
};

export default NavBar;