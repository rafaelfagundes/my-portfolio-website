import { Box, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function ThemeToggle() {
  const darkActive = useColorModeValue(false, true);
  const lightActive = useColorModeValue(true, false);

  const toggleBackground = useColorModeValue(
    "linear-gradient(180deg, #FEC260 0%, #A12568 100%)",
    "linear-gradient(180deg, #3B185F 0%, #2A0944 100%)"
  );

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      w="96px"
      h="48px"
      backgroundColor={colorMode === "light" ? "#FFF" : "rgba(0, 0, 0, 0.3)"}
      boxShadow="inset 0 0 5px rgba(0, 0, 0, 0.6)"
      borderRadius={24}
      display="flex"
      cursor="pointer"
      onClick={() => toggleColorMode()}
      position="relative"
    >
      <Box
        w="48px"
        h="48px"
        borderRadius="24px"
        background={toggleBackground}
        position="absolute"
        top="0px"
        left={colorMode === "light" ? "0px" : "48px"}
        transition="left 300ms ease-in-out"
      ></Box>
      <Box
        w="46px"
        h="46px"
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Image
          w="24px"
          h="24px"
          mt="2px"
          ml="2px"
          src="./icons/sun.svg"
          alt="Light Mode"
          filter="invert(1)"
          opacity={lightActive ? 1 : 0.5}
        ></Image>
      </Box>
      <Box
        w="48px"
        h="48px"
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Image
          w="24px"
          h="24px"
          mt="0px"
          ml="5px"
          src="./icons/moon.svg"
          alt="Dark Mode"
          filter={colorMode === "dark" ? "invert(1)" : "invert(0)"}
          opacity={darkActive ? 1 : 0.5}
        ></Image>
      </Box>
    </Box>
  );
}

export default ThemeToggle;
