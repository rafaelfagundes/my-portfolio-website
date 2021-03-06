import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type ButtonProps = {
  icon?: string;
  children: string;
  color?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isMobile: boolean;
  size?: number;
};

function Button({
  icon,
  children,
  color,
  onClick,
  isMobile,
  size,
}: ButtonProps) {
  const fgColor = useColorModeValue("#000", "#fff");
  const isDark = useColorModeValue(0, 1);

  return (
    <Box
      onClick={onClick}
      border={color ? "undefined" : `2px solid ${fgColor}`}
      minW="180px"
      maxW={isMobile ? "42vw" : size ? `${size}px` : "undefined"}
      pr="20px"
      pl="20px"
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
      {icon && (
        <Image
          mr="8px"
          w={22}
          h={22}
          alt={children}
          src={`/icons/${icon}.svg`}
          filter={color ? "invert(1)" : `invert(${isDark})`}
        ></Image>
      )}
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
