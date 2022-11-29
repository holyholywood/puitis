import { Box, Button, Container, Grid, Input, Textarea } from "@chakra-ui/react";
import { StateFromReducersMapObject } from "@reduxjs/toolkit";
import React, { useReducer } from "react";
import EditBar from "../src/components/complex/EditBar";
import useLoading from "../src/libs/resources/Loading";

enum createActionType {
  newVerse = "NEW_VERSE",
  deleteVerse = "DELETE_VERSE",
}
interface createAction {
  type: createActionType;
}
interface CreateStateProps {
  verse: number;
}
function reducer(state: CreateStateProps, action: createAction) {
  const { type } = action;
  switch (type) {
    case createActionType.newVerse:
      return {
        ...state,
        verse: state.verse + 1,
      };
    case createActionType.deleteVerse:
      return {
        ...state,
        verse: state.verse - 1,
      };
    default:
      return state;
  }
}

const initialState = {
  verse: 0,
};
const CreatePage = () => {
  const [verseNumber, setVerseNumber] = useReducer(reducer, initialState);
  const { Loading, isLoading } = useLoading();
  return (
    <Container w="full" maxW="8xl">
      <Box
        minH="100vh"
        w="full"
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        gap="8"
      >
        <Input
          placeholder="Tulis Judul"
          maxW="md"
          mx="auto"
          borderTop={"none"}
          borderX="none"
          borderColor="blackAlpha.500"
          borderWidth={"2"}
          textAlign={"center"}
          dropShadow="lg"
          focusBorderColor="none"
          borderRadius={"none"}
          shadow="lg"
        />
        <Box maxW="3xl" w="full" pos="relative" h="fit-content" mx="auto">
          <Box
            resize={"vertical"}
            minH="96"
            borderRadius={"none"}
            borderColor="#2C3639"
            rounded="sm"
            position={"relative"}
            contentEditable
          ></Box>
          <EditBar />
        </Box>
        {/* {isLoading ? <Loading /> : "halaman"} */}
      </Box>
    </Container>
  );
};

export default CreatePage;
