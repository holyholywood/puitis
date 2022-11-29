import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Container, Flex, Text } from "@chakra-ui/react";
import { Lobster } from "@next/font/google";
import Link from "next/link";

const brandFont = Lobster({
  weight: "400",
});

const PageBrand = () => {
  return (
    <Container w="full" maxW="6xl" position={"relative"}>
      <Link href="/">
        <Flex
          fontSize={"5xl"}
          textAlign="center"
          my="10"
          position={"absolute"}
          top="0"
          right="0"
          left="0"
          justify={"center"}
          align="center"
          maxW="8xl"
        >
          <Text className={brandFont.className}>Puitis</Text>
          <InfoOutlineIcon
            w="5"
            right="0"
            position="absolute"
            as="button"
            _hover={{
              cursor: "pointer",
            }}
          />
        </Flex>
      </Link>
    </Container>
  );
};

export default PageBrand;
