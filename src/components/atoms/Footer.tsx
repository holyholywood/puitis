import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = ({ className }: { className: string }) => {
  return (
    <Box
      as="footer"
      // pos={"fixed"}
      bottom="0"
      right="0"
      left="0"
      h="36"
      bg="#2C3639"
      className={className}
    >
      <Box
        as="ul"
        listStyleType={"none"}
        mx="auto"
        display={"flex"}
        gap="5"
        color="white"
        justifyContent={"center"}
        py="10"
      >
        <li>Membuat Puisi</li>
        <li>Bantuan</li>
        <li>Dukungan</li>
      </Box>
      <Text color="white" textAlign={"center"}>
        Copyright Ditotisi 2022
      </Text>
    </Box>
  );
};

export default Footer;
