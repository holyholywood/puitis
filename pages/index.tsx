import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

function Home() {
  return (
    <>
      <Container w="full" maxW="8xl">
        <Flex
          w="full"
          justifyContent={"center"}
          direction="column"
          alignItems={"center"}
          gap="40"
        >
          <Text color="#2C3639" fontSize={"2xl"}>
            Tulis puisimu dan sebarkan
          </Text>
          <Link href={"/create"}>
            <Button
              bg="#0BC5EA"
              color="white"
              rounded={"full"}
              px="14"
              py="6"
              fontWeight={"1"}
              _hover={{
                opacity: "80%",
              }}
              boxShadow={"xl"}
            >
              BUAT
            </Button>
          </Link>
        </Flex>
      </Container>
      <Box
        as="section"
        bgImage={"url('/assets/SVG/wave.svg')"}
        bgSize="unset"
        w="full"
        mt="16"
        bgPosition={"top"}
        h="64"
        bgRepeat={"no-repeat"}
        display="flex"
        justifyContent={"center"}
        alignItems="end"
      >
        <Text textAlign={"center"} fontSize="36" color="white" fontWeight={"semibold"}>
          Puisi pengguna lain
        </Text>
      </Box>
      <Box as="section" bg="#0099FF" minH="100vh" w="full"></Box>
    </>
  );
}

Home.title = "Beranda";
export default Home;
