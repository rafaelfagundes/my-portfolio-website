import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Main from "../src/components/templates/main";
import Fonts from "../styles/fonts";
import theme from "../styles/theme";

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <Component {...pageProps} key={router.route}></Component>
      </Main>
    </ChakraProvider>
  );
}

export default Website;
