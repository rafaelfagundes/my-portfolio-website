import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import Button from "../src/components/atoms/button";
import HorizontalLine from "../src/components/atoms/horizontal-line";
import CardHeader from "../src/components/molecules/card-header";
import SocialButtons from "../src/components/molecules/social-buttons";

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const boxColor = useColorModeValue("#fff", "rgba(0, 0, 0, 0.3)");

  return (
    <motion.div
      transition={{ type: "easeInOut", duration: 0.2 }}
      animate={{ scale: 1, y: 0 }}
      initial={{ scale: 0.8, y: 20 }}
    >
      <Box
        backgroundColor={boxColor}
        w={isMobile ? "100vw" : 425}
        borderRadius={isMobile ? "undefined" : 20}
        overflow="hidden"
        boxShadow="xl"
      >
        <CardHeader isMobile={isMobile}></CardHeader>
        <SocialButtons isMobile={isMobile}></SocialButtons>
        <HorizontalLine></HorizontalLine>
        <Heading
          textAlign="center"
          as="h2"
          fontSize={20}
          margin="20px 22px 0 22px"
        >
          Portfolio
        </Heading>
        <Flex
          justifyContent="space-between"
          p="25px 0px 5px 0px"
          margin="0 22px"
        >
          <Link href="/fun-portfolio">
            <motion.span
              animate={{ y: 0, opacity: 1, scale: 1 }}
              initial={{ y: -20, opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.72, staggerChildren: 0.2 }}
            >
              <Button isMobile={isMobile} color icon="smile">
                Fun
              </Button>
            </motion.span>
          </Link>
          <Link href="/classic-portfolio">
            <motion.span
              animate={{ y: 0, opacity: 1, scale: 1 }}
              initial={{ y: -20, opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.8, staggerChildren: 0.3 }}
            >
              <Button isMobile={isMobile}>Classic</Button>
            </motion.span>
          </Link>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Home;
