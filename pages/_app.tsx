import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Main from "../src/components/templates/main";
import Fonts from "../styles/fonts";
import theme from "../styles/theme";

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}></AnimatePresence>
        <Component {...pageProps} key={router.route}></Component>
      </Main>
    </ChakraProvider>
  );
}

export default Website;
