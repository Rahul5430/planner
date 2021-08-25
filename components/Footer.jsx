import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';

import { colors } from '../theme';
import Logo from './Logo';
import LinkIconBar from './LinkIconBar';
import links from '../data/footerLinks';

export default function Footer() {
    const bg = useColorModeValue(colors.bg.light, colors.bg.dark);

    return (
        <Box
            as="footer"
            // mt={12}
            // bottom={0}
            // height={(document.querySelector('footer').previousSibling.style.height).slice(0, -2)}
            height="100%"
            textAlign="center"
            className="app"
            bg={bg}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Logo />
                <Text>
                    ©{' '}
                    {new Date().getFullYear()}
                    {' '}Planner. All rights reserved
                    {/* {document.querySelector('footer').previousSibling.style.height} */}
                </Text>
                <LinkIconBar links={links} />
            </Container>
        </Box>
    );
};