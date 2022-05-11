import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

function Main({ children, router }) {
  return (
    <Box as="main">
      <Head>
        <meta name="viweport" content="width=device-width, initial-scale=1" />
        <title>Rafael Fagundes - Portifolio Website</title>
      </Head>
      {children}
    </Box>
  );
}

export default Main;
