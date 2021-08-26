/* eslint-disable @next/next/no-img-element */
import { Box, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react';
import { animateScroll as scroll } from "react-scroll";
import Link from 'next/link';

const AccountMenu = ({ logo, userLogo, myStyle, user }) => {
    if (userLogo) {
        return (
            <Menu>
                <MenuButton as="button">
                    <img 
                        alt="logo"
                        src={logo}
                        width={60}
                        height={60}
                        onClick={scroll.scrollToTop}
                        style={myStyle}
                    />
                </MenuButton>
                <MenuList>
                    <MenuGroup title="Profile">
                        <MenuItem>Name: {user.name}</MenuItem>
                        <MenuItem>Branch: {user.branch}</MenuItem>
                        <MenuItem>SID: {user.sid}</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuItem>
                        <Link href="/account" >
                            My Account
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        );
    } else {
        return (
            <Box>
                <img 
                    alt="logo"
                    src={logo}
                    width={60}
                    height={60}
                    onClick={scroll.scrollToTop}
                    style={myStyle}
                />
            </Box>
        );
    }
};

export default function Logo({ logo, userLogo, user }) {
    const myStyle = {
        padding: 10,
        borderRadius: userLogo ? '50%' : '',
    };

    return (
        <AccountMenu 
            logo={logo} 
            userLogo={userLogo} 
            myStyle={myStyle} 
            user={user} 
        />
    );
};