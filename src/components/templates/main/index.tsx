import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Router } from "next/router";
import React from "react";

type MainProps = {
  children: JSX.Element | JSX.Element[];
  router?: Router;
};

function Main({ children }: MainProps) {
  return (
    <Box as="main">
      <Head>
        <meta name="viweport" content="width=device-width, initial-scale=1" />
        <title>Rafael Fagundes - Portfolio Website</title>
      </Head>
      {children}
    </Box>
  );
}

export default Main;
