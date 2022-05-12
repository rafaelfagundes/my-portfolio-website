import { Box, Flex, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../../atoms/theme-toggle";

type MainProps = {
  children: JSX.Element | JSX.Element[];
  router?: Router;
};

function Main({ children }: MainProps) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  // Making sure that is already mounted to avoid hydration
  // problems with previously server-side rendered page
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const bgColor = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(0, 0, 0, 0.8)"
  );

  return (
    <Box as="main">
      <Head>
        <meta name="viweport" content="width=device-width, initial-scale=1" />
        <title>Rafael Fagundes - Portfolio Website</title>
      </Head>
      <Flex
        backgroundImage="./img/bg.jpg"
        w="100vw"
        h="100vh"
        position="relative"
      >
        {mounted && (
          <Box
            top={isMobile ? "15px" : 10}
            right={isMobile ? "15px" : 10}
            w="96px"
            h="48px"
            position="absolute"
            zIndex={3}
          >
            <ThemeToggle></ThemeToggle>
          </Box>
        )}
        {mounted && (
          <Box
            bgColor={bgColor}
            backdropFilter="blur(100px)"
            w="100vw"
            h="100vh"
            display="flex"
            justifyContent={isMobile ? "undefined" : "center"}
            alignItems="center"
            flexDirection="column"
          >
            {children}
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default Main;
