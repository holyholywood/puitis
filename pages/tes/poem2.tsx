import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Container, Heading, Text, Textarea } from "@chakra-ui/react";
import { SumArray } from "../../src/libs/helpers/utils/sumArray";
interface verse {
  no: number;
  content: string[];
}
const Poem2Page = () => {
  const [textArea, setText] = useState("");
  const [allContent, setAllContent] = useState<string[]>([]);
  const [verseAmount, setVerseAmount] = useState<number>(1);
  const [verseData, setVerseData] = useState<number[]>([]);

  const typeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    const newItem = e.target.value.split(/\r?\n/);
    setAllContent([...newItem]);
  };

  const addVerseHandler = () => {
    setVerseAmount(verseAmount + 1);
    if (allContent.length < 1) {
      alert("write first please");
    } else {
      if (verseData.length < 2) {
        setVerseData([...verseData, allContent.length]);
      } else {
        setVerseData([...verseData, allContent.length - SumArray(verseData)]);
      }
    }
  };
  return (
    <Container minH="100vh">
      <Button onClick={addVerseHandler}>add New Verse</Button>
      <Textarea
        placeholder="Here is a sample placeholder"
        value={textArea}
        onChange={typeHandler}
        whiteSpace="pre"
        minH={"fit-content"}
        resize="vertical"
      />
      <Box position={"absolute"} right="2" minW="20" border={"2px"} p="5" top="44">
        {/* {allContent.map((row, index) => {
          return <Text key={index}>{row}</Text>;
        })} */}
        <Heading size={"xs"}>Verse Data : {}</Heading>
        <Heading size={"xs"}>content length : {allContent.length}</Heading>
        <Heading size={"xs"}>Sum Data : {SumArray(verseData)}</Heading>[
        {verseData.length > 0 &&
          verseData.map((verse, index) => {
            return <Text key={index}>{verse}</Text>;
          })}
        ]
      </Box>
      <Text>verse : {verseAmount}</Text>
      <Text>Line Breaks : {(textArea.match(/\n/g) || []).length}</Text>
      <Text>
        Number of Line : {allContent.length > 0 ? allContent.length : textArea !== "" ? 1 : 0}
      </Text>
      <Text>{textArea.length}</Text>
      <Text>TEXT NEW : {textArea.length + textArea.replace(/[^\n]/g, "").length}</Text>
    </Container>
  );
};

export default Poem2Page;
