import { Box, Button, Container, Input } from "@chakra-ui/react";
import React, {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { poemBody, verseNumber } from "../../src/libs/resources/poemEx";
const focusStyle = {
  borderStyle: "solid",
  borderColor: "blue",
  borderWidth: "2px",
  backgroundColor: "blue",
};
function isEven(number: number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

const PoemPage = () => {
  const [textGroup, setTextGroup] = useState<string[][]>([]);
  const [text, setText] = useState<string>("");
  const [verseActive, setVerseActive] = useState<number>(1);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const addContent = () => {
    let allPoemContent = textGroup;
    if (allPoemContent[verseActive - 1]) {
      allPoemContent[verseActive - 1] = [...allPoemContent[verseActive - 1], text];
    } else {
      allPoemContent.push([text]);
    }
    setTextGroup([...allPoemContent]);
    setText("");
  };
  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text !== "") {
      addContent();
    }
  };

  const addVerse = () => {
    addContent();
    setVerseActive(verseActive + 1);
  };

  const myDiv = useRef<any>(null);
  return (
    <Box minH="100vh">
      <Container minH="96" w="full" h="fit-content">
        <Button onClick={addVerse}>New Verse</Button>
        <Input
          id="input"
          type="text"
          onChange={handleInput}
          onKeyDown={keyDownHandler}
          value={text}
          opacity="0"
        />
        {"verse : " + verseActive}
        <label
          htmlFor="input"
          style={{
            borderStyle: "solid",
            borderWidth: "2px",
            height: "10rem",
            display: "block",
          }}
          ref={myDiv}
          onMouseEnter={() => {
            myDiv.current.style.borderColor = "blue";
          }}
          onMouseLeave={() => {
            myDiv.current.style.borderColor = "transparent";
          }}
        >
          {textGroup &&
            textGroup.map((verse, i) => {
              return (
                <blockquote
                  key={i}
                  style={isEven(i) ? { marginLeft: "0rem" } : { marginLeft: "3rem" }}
                >
                  {verse.map((row, index) => {
                    return <p key={index}>{row}</p>;
                  })}
                </blockquote>
              );
            })}
          {text !== "" && (
            <p style={isEven(verseActive) ? { marginLeft: "3rem" } : { marginLeft: "0rem" }}>
              {text}
            </p>
          )}
        </label>
      </Container>
    </Box>
  );
};

export default PoemPage;
