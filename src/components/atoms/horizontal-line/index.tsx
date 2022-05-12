import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function HorizontalLine() {
  const color = useColorModeValue("#eee", "#222");
  return <Box w="100%" h="1px" bgColor={color}></Box>;
}

export default HorizontalLine;
