import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

function MessagePage() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const boxColor = useColorModeValue("#fff", "rgba(0, 0, 0, 0.3)");

  const icon = {
    color: useColorModeValue("invert(0)", "invert(1)"),
    size: 12,
  };

  return (
    <Box
      backgroundColor={boxColor}
      w={isMobile ? "100vw" : 425}
      borderRadius={isMobile ? "undefined" : 20}
      overflow="hidden"
      boxShadow="xl"
    >
      <Box p={10}>
        <Image
          alt="Message Icon"
          src="./icons/mail.svg"
          filter={icon.color}
          w={icon.size}
          h={icon.size}
        ></Image>
        <Heading as="h1">Feel free to contact me</Heading>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MessagePage;
