import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type CardHeaderProps = {
  isMobile: boolean;
};

const item = {
  visible: { opacity: 1, y: 0, scale: 1 },
  hidden: { opacity: 0, y: 25, scale: 0.8 },
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

function CardHeader({ isMobile }: CardHeaderProps) {
  const avatarSize = isMobile ? "40vw" : 162;

  return (
    <Box
      padding={isMobile ? "64px 20px 40px 20px" : "40px 20px"}
      textAlign="center"
      background="linear-gradient(113.07deg, #A12568 0%, #3B185F 100%);"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <motion.span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <motion.span variants={item}>
          <Image
            alt="Rafael's Avatar Picture"
            src="./img/avatar.jpg"
            borderRadius="50%"
            w={avatarSize}
            h={avatarSize}
            mb={5}
          ></Image>
        </motion.span>
        <motion.span variants={item}>
          <Heading color="white" mb={3} fontSize="2.1rem">
            Rafael Fagundes
          </Heading>
        </motion.span>
        <motion.span variants={item}>
          <Text color="white" opacity={0.85}>
            Hello, I&apos;m a web and mobile developer
            <br />
            based in Minas Gerais, Brazil.
          </Text>
        </motion.span>
      </motion.span>
    </Box>
  );
}

export default CardHeader;
