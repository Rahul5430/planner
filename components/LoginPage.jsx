import React from "react";
import { Box, Button, Center, Container, Heading, Icon, IconButton, SimpleGrid, Stack, Text, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun, FaQuoteLeft } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import { signIn } from "next-auth/client";

import { colors } from '../theme';
import quotes from '../data/quotes';

const ColorModeButton = ({ mr }) => {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const nextMode = useColorModeValue("dark", "light");

    return (
        <Tooltip
            label={`Toggle ${nextMode} mode`}
            aria-label={`Toggle ${nextMode} mode`}
        >
            <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Toggle ${nextMode} mode`}
                variant="ghost"
                color="current"
                onClick={toggleColorMode}
                icon={<SwitchIcon />}
                style={{ marginRight: mr }}
            />
        </Tooltip>
    );
};

const ShowQuote = () => {
    var i = Math.floor(Math.random() * 22);

    return (
        <>
            <Icon as={FaQuoteLeft} />
            <Text as="em">
                {quotes[i].quote} <br />
                {"-"}{quotes[i].author}
            </Text>
        </>
    )
};

const Description = ({ bg, color }) => (
    <Stack 
        // bg={bg}
        spacing={{ base: 10, md: 20 }}
        // borderWidth={bg === colors.bg.light ? '1px' : ''}
        // shadow={bg === colors.bg.light ? 'lg' : ''}
    >
        <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
        >
            Planner{' '}
            <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
            >
                &amp;
            </Text>{' '}
            Scheduler
        </Heading>
        <Stack direction={'row'} spacing={4} align={'center'}>
            <ShowQuote />
        </Stack>
    </Stack>
);

const Form = ({ bg, color }) => (
    <Stack
        bg={bg}
        rounded={'xl'}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        maxW={{ lg: 'lg' }}
        borderWidth={bg === colors.bg.light ? '1px' : ''}
        shadow='lg'
    >
        <Stack spacing={4}>
            <Box textAlign="center">
                <Heading
                    color={color}
                    lineHeight={1.1}
                    fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                >
                    Welcome Back
                    <Text
                        as={'span'}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        bgClip="text">
                        !
                    </Text>
                </Heading>
                <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                    <br/>Please login using your PEC account as your name and branch are verified using your PEC account
                </Text>
            </Box>
        </Stack>
        {/* <button
            onClick={() => 
                signIn("google", { callbackUrl: "http:localhost:3000/" })
            }
        >
            Sign In
        </button> */}
        <Center>
            <Button
                w="full"
                maxW="md"
                variant="outline"
                leftIcon={<FcGoogle />} 
                onClick={() => 
                    signIn("google", { callbackUrl: "http:localhost:3000/" })
                }
            >
                <Center>
                    Sign in with Google
                </Center>
            </Button>
        </Center>
    </Stack>
);

export default function LoginPage() {
    const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
    const color = useColorModeValue('secondary.light', 'secondary.dark');

    return (
        <Box position="relative">
            <ColorModeButton />
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}
            >
                <Description bg={bg} color={color} />
                <Form bg={bg} color={color} />
            </Container>
        </Box>
    );
};