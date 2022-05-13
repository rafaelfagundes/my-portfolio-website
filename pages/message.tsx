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
import { motion } from "framer-motion";
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

  const BOX_ANIMATION_CONFIG = {
    variants: {
      initial: { opacity: 0, x: 0, y: 0, scale: 0.9 },
      animate: { opacity: 1, x: 0, y: 0, scale: 1 },
      exit: { opacity: 0, x: 0, y: 0, scale: 0 },
    },
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: { duration: 0.2, type: "easeInOut" },
  };

  const TOP_CONTENT_ANIMATION_CONFIG = {
    variants: {
      initial: { opacity: 0, x: 0, y: 20, scale: 0.9 },
      animate: { opacity: 1, x: 0, y: 0, scale: 1 },
      exit: { opacity: 0, x: 0, y: 0, scale: 1 },
    },
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: { duration: 0.3, type: "easeInOut" },
  };

  const MIDDLE_CONTENT_ANIMATION_CONFIG = {
    variants: {
      initial: { opacity: 0, x: 0, y: 0, scale: 0.9 },
      animate: { opacity: 1, x: 0, y: 0, scale: 1 },
      exit: { opacity: 0, x: 0, y: 0, scale: 1 },
    },
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: { duration: 0.3, type: "easeInOut" },
  };

  const BOTTOM_CONTENT_ANIMATION_CONFIG = {
    variants: {
      initial: { opacity: 0, x: 0, y: -20, scale: 0.9 },
      animate: { opacity: 1, x: 0, y: 0, scale: 1 },
      exit: { opacity: 0, x: 0, y: 0, scale: 1 },
    },
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: { duration: 0.3, type: "easeInOut" },
  };

  return (
    <motion.div
      variants={BOX_ANIMATION_CONFIG.variants}
      initial={BOX_ANIMATION_CONFIG.initial}
      animate={BOX_ANIMATION_CONFIG.animate}
      exit={BOX_ANIMATION_CONFIG.exit}
      transition={BOX_ANIMATION_CONFIG.transition}
    >
      <Box
        backgroundColor={boxColor}
        w={isMobile ? "100vw" : 425}
        borderRadius={isMobile ? "undefined" : 20}
        overflow="hidden"
        boxShadow="xl"
      >
        <Box p="30px 0 10px 0">
          <Flex
            alignItems="center"
            flexDirection="column"
            pt={isMobile ? 12 : 0}
          >
            <motion.div
              variants={TOP_CONTENT_ANIMATION_CONFIG.variants}
              initial={TOP_CONTENT_ANIMATION_CONFIG.initial}
              animate={TOP_CONTENT_ANIMATION_CONFIG.animate}
              exit={TOP_CONTENT_ANIMATION_CONFIG.exit}
              transition={TOP_CONTENT_ANIMATION_CONFIG.transition}
            >
              <Image
                alt="Message Icon"
                src="./icons/mail.svg"
                filter={icon.color}
                w={icon.size}
                h={icon.size}
                mb={2}
              ></Image>
            </motion.div>
            <motion.div
              variants={TOP_CONTENT_ANIMATION_CONFIG.variants}
              initial={TOP_CONTENT_ANIMATION_CONFIG.initial}
              animate={TOP_CONTENT_ANIMATION_CONFIG.animate}
              exit={TOP_CONTENT_ANIMATION_CONFIG.exit}
              transition={TOP_CONTENT_ANIMATION_CONFIG.transition}
            >
              <Heading
                as="h1"
                fontSize={isMobile ? 28 : 28}
                textTransform="capitalize"
              >
                Feel free to contact me
              </Heading>
            </motion.div>
          </Flex>
          <motion.div
            variants={MIDDLE_CONTENT_ANIMATION_CONFIG.variants}
            initial={MIDDLE_CONTENT_ANIMATION_CONFIG.initial}
            animate={MIDDLE_CONTENT_ANIMATION_CONFIG.animate}
            exit={MIDDLE_CONTENT_ANIMATION_CONFIG.exit}
            transition={MIDDLE_CONTENT_ANIMATION_CONFIG.transition}
          >
            <Box mb={5}></Box>
            <HorizontalLine></HorizontalLine>
            <Box mb={5}></Box>
          </motion.div>
          <Box p="0 30px 0 30px">
            <motion.div
              variants={MIDDLE_CONTENT_ANIMATION_CONFIG.variants}
              initial={MIDDLE_CONTENT_ANIMATION_CONFIG.initial}
              animate={MIDDLE_CONTENT_ANIMATION_CONFIG.animate}
              exit={MIDDLE_CONTENT_ANIMATION_CONFIG.exit}
              transition={MIDDLE_CONTENT_ANIMATION_CONFIG.transition}
            >
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" type="text" />
              </FormControl>
              <Box mb={5}></Box>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
                <FormHelperText>Your email will never be shared</FormHelperText>
              </FormControl>
              <Box mb={5}></Box>
              <FormControl>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea id="message"></Textarea>
              </FormControl>
            </motion.div>
            <motion.div
              variants={BOTTOM_CONTENT_ANIMATION_CONFIG.variants}
              initial={BOTTOM_CONTENT_ANIMATION_CONFIG.initial}
              animate={BOTTOM_CONTENT_ANIMATION_CONFIG.animate}
              exit={BOTTOM_CONTENT_ANIMATION_CONFIG.exit}
              transition={BOTTOM_CONTENT_ANIMATION_CONFIG.transition}
            >
              <Flex mt={8} justifyContent="space-between">
                <Button
                  icon="arrow-left"
                  isMobile={isMobile}
                  onClick={() => history.back()}
                >
                  Back
                </Button>
                <Button icon="send" isMobile={isMobile} color>
                  Send
                </Button>
              </Flex>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default MessagePage;
