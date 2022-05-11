import { Box } from "@chakra-ui/react";
import React from "react";
import Button from "../../atoms/button";

function SocialButtons() {
  return (
    <Box
      p="35px 22px 15px 22px"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Button icon="instagram">Instagram</Button>
      <Button icon="github">GitHub</Button>
      <Button icon="linkedin">LinkedIn</Button>
      <Button icon="mail">Message</Button>
    </Box>
  );
}

export default SocialButtons;
