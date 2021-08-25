/* eslint-disable @next/next/no-img-element */
import { Box, useColorModeValue } from '@chakra-ui/react';
import { animateScroll as scroll } from "react-scroll";

export default function Logo() {
    const logo = useColorModeValue("/black.png", "/white.png");

    return (
        <Box>
            <img 
                alt="logo"
                src={logo}
                width={60}
                height={60}
                onClick={scroll.scrollToTop}
                style={{ padding: 10 }}
            />
        </Box>
    );
};