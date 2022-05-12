import { ColorModeScript } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import theme from "../styles/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/app-icons/apple-icon-57x57.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/app-icons/apple-icon-60x60.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/app-icons/apple-icon-72x72.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/app-icons/apple-icon-76x76.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/app-icons/apple-icon-114x114.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/app-icons/apple-icon-120x120.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/app-icons/apple-icon-144x144.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/app-icons/apple-icon-152x152.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/app-icons/apple-icon-180x180.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/app-icons/android-icon-192x192.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/app-icons/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/app-icons/favicon-96x96.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/app-icons/favicon-16x16.png"
          ></link>
          <link rel="manifest" href="/manifest.json"></link>
          <meta name="msapplication-TileColor" content="#111111"></meta>
          <meta
            name="msapplication-TileImage"
            content="/app-icons/ms-icon-144x144.png"
          ></meta>
          <meta name="theme-color" content="#111111"></meta>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
