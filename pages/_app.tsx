import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { Comfortaa } from "@next/font/google";
import Layout from "../src/components/layout/Layout";
const comfortaaFont = Comfortaa({
  weight: "400",
});

export type NextPageCustom = NextPage & {
  title: string;
};

type AppPropsWithoutLayout = AppProps & {
  Component: NextPageCustom;
};
export default function App({ Component, pageProps }: AppPropsWithoutLayout) {
  return (
    <ChakraProvider>
      <Layout className={comfortaaFont.className} title={Component.title}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
