import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Button from "../src/components/atoms/button";
import HorizontalLine from "../src/components/atoms/horizontal-line";

function MessagePage() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const boxColor = useColorModeValue("#fff", "rgba(0, 0, 0, 0.3)");

  const icon = {
    color: useColorModeValue("invert(0)", "invert(1)"),
    size: 24,
  };

  return (
    <Box
      backgroundColor={boxColor}
      w={isMobile ? "100vw" : 425}
      borderRadius={isMobile ? "undefined" : 20}
      overflow="hidden"
      boxShadow="xl"
    >
      <Box p="30px 0 10px 0">
        <Flex alignItems="center" flexDirection="column" pt={isMobile ? 12 : 0}>
          <Image
            alt="Message Icon"
            src="./icons/mail.svg"
            filter={icon.color}
            w={icon.size}
            h={icon.size}
            mb={2}
          ></Image>
          <Heading
            as="h1"
            fontSize={isMobile ? 28 : 28}
            textTransform="capitalize"
          >
            Feel free to contact me
          </Heading>
        </Flex>
        <Box mb={5}></Box>
        <HorizontalLine></HorizontalLine>
        <Box mb={5}></Box>
        <Box p="0 30px 0 30px">
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <Box mb={5}></Box>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>I&apos;ll never share your email</FormHelperText>
          </FormControl>
          <Box mb={5}></Box>
          <FormControl>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message"></Textarea>
          </FormControl>
          <Flex mt={8} justifyContent="space-between">
            <Button
              icon="arrow-left"
              isMobile={isMobile}
              onClick={() => history.back()}
            >
              Voltar
            </Button>
            <Button icon="send" isMobile={isMobile} color>
              Submit
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default MessagePage;
