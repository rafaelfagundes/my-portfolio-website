import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Button from "../../atoms/button";

const item = {
  visible: { opacity: 1, y: 0, scale: 1 },
  hidden: { opacity: 0, y: -25, scale: 0.8 },
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

type SocialButtonsProps = {
  isMobile: boolean;
};

function SocialButtons({ isMobile }: SocialButtonsProps) {
  return (
    <Box p="35px 22px 15px 22px">
      <motion.span
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <motion.span variants={item}>
          <Link href="https://www.instagram.com/rafael_fagundes">
            <Button isMobile={isMobile} icon="instagram">
              Instagram
            </Button>
          </Link>
        </motion.span>
        <motion.span variants={item}>
          <Link href="https://github.com/rafaelfagundes">
            <Button isMobile={isMobile} icon="github">
              GitHub
            </Button>
          </Link>
        </motion.span>
        <motion.span variants={item}>
          <Button isMobile={isMobile} icon="linkedin">
            LinkedIn
          </Button>
        </motion.span>
        <motion.span variants={item}>
          <Link href="/message">
            <Button isMobile={isMobile} icon="mail">
              Message
            </Button>
          </Link>
        </motion.span>
      </motion.span>
    </Box>
  );
}

export default SocialButtons;
