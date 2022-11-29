import { Button, Grid } from "@chakra-ui/react";
import { RiFontSize, RiEraserLine } from "react-icons/ri";
import { MdKeyboardTab, MdOutlineRemoveRedEye, MdOutlineSave } from "react-icons/md";
import React from "react";

const IconProps = {
  style: { width: "1.5rem", display: "block" },
  size: "2xl",
};
const EditBar = () => {
  return (
    <Grid
      pos="absolute"
      bottom="3"
      left="0"
      right="0"
      border="1px"
      maxW="xl"
      mx="auto"
      rounded="md"
      borderStyle={"solid"}
      borderColor="black"
      zIndex={10}
      h="16"
      display={"grid"}
      templateColumns="repeat(5, 1fr)"
      gap="1px"
      overflow={"hidden"}
    >
      <Button
        fontWeight={"light"}
        fontSize="xx-small"
        bg="transparent"
        borderRadius={"none"}
        h="full"
        w="full"
        display={"flex"}
        flexDir="column"
        gap="1"
        justifyContent={"space-between"}
        py="3"
      >
        <RiEraserLine {...IconProps} />
        <span style={{ display: "block" }}>Hapus</span>
        {/* remix RiFontSize */}
      </Button>
      <Button
        fontWeight={"light"}
        fontSize="xx-small"
        bg="transparent"
        borderRadius={"none"}
        h="full"
        w="full"
        display={"flex"}
        flexDir="column"
        gap="1"
        justifyContent={"space-between"}
        py="3"
      >
        <RiFontSize {...IconProps} />
        <span> Ukuran Font</span>
        {/* remix RiFontSize */}
      </Button>
      <Button
        fontWeight={"light"}
        fontSize="xx-small"
        bg="transparent"
        borderRadius={"none"}
        h="full"
        w="full"
        display={"flex"}
        flexDir="column"
        gap="1"
        justifyContent={"space-between"}
        py="3"
      >
        <MdKeyboardTab {...IconProps} />
        <span>Bait Baru</span>
        {/* Material MdKeyboardTab */}
      </Button>
      <Button
        fontWeight={"light"}
        fontSize="xx-small"
        bg="transparent"
        borderRadius={"none"}
        h="full"
        w="full"
        display={"flex"}
        flexDir="column"
        gap="1"
        justifyContent={"space-between"}
        py="3"
      >
        <MdOutlineRemoveRedEye {...IconProps} />
        <span>Pratinjau</span>
        {/* Material MdOutlineRemoveRedEye */}
      </Button>
      <Button
        fontWeight={"light"}
        fontSize="xx-small"
        bg="transparent"
        borderRadius={"none"}
        h="full"
        w="full"
        display={"flex"}
        flexDir="column"
        gap="1"
        justifyContent={"space-between"}
        py="3"
      >
        <MdOutlineSave {...IconProps} />
        {/* Material MdOutlineSave */}
        <span>Simpan</span>
      </Button>
    </Grid>
  );
};

export default EditBar;
