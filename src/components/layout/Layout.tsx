import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Head from "next/head";
import { Comfortaa } from "@next/font/google";
import PageBrand from "../atoms/PageBrand";
import Footer from "../atoms/Footer";

const mainFont = Comfortaa({
  weight: "400",
  subsets: ["latin"],
});
interface LayoutPropsInterface {
  children: ReactNode;
  title: string;
  className: string;
}
const Layout = ({ children, title, className }: LayoutPropsInterface) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PageBrand />
      <Box as="section" className={mainFont.className} minW="100vh" pt="40">
        {children}
      </Box>
      <Footer className={mainFont.className} />
    </>
  );
};

export default Layout;
