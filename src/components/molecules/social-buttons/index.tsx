import { Box } from "@chakra-ui/react";
import React from "react";
import Button from "../../atoms/button";

type SocialButtonsProps = {
  isMobile: boolean;
};

function SocialButtons({ isMobile }: SocialButtonsProps) {
  return (
    <Box
      p="35px 22px 15px 22px"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Button isMobile={isMobile} icon="instagram">
        Instagram
      </Button>
      <Button isMobile={isMobile} icon="github">
        GitHub
      </Button>
      <Button isMobile={isMobile} icon="linkedin">
        LinkedIn
      </Button>
      <Button isMobile={isMobile} icon="mail">
        Message
      </Button>
    </Box>
  );
}

export default SocialButtons;
