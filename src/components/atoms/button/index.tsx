import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";

type ButtonProps = {
  icon: string;
  children: string;
  color?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

function Button({ icon, children, color, onClick }: ButtonProps) {
  const fgColor = useColorModeValue("#000", "#fff");
  const isDark = useColorModeValue(0, 1);

  return (
    <Box
      onClick={onClick}
      border={color ? "undefined" : `2px solid ${fgColor}`}
      w="180px"
      h="44px"
      borderRadius="22px"
      mb="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      background={
        color
          ? "linear-gradient(93.2deg, #A12568 0%, #3B185F 100.01%)"
          : undefined
      }
    >
      <Image
        mr="8px"
        w={22}
        h={22}
        alt={children}
        src={`/icons/${icon}.svg`}
        filter={color ? "invert(1)" : `invert(${isDark})`}
      ></Image>
      <Text
        textTransform="uppercase"
        fontWeight="medium"
        color={color ? "#fff" : fgColor}
      >
        {children}
      </Text>
    </Box>
  );
}

export default Button;
