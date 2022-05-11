import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function CardHeader() {
  return (
    <Box
      padding="40px 20px"
      textAlign="center"
      background="linear-gradient(113.07deg, #A12568 0%, #3B185F 100%);"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        alt="Rafael's Avatar Picture"
        src="./img/avatar.jpg"
        borderRadius="50%"
        w="128"
        h="128"
        mb={5}
      ></Image>
      <Heading color="white" mb={3} fontSize="2.1rem">
        Rafael Fagundes
      </Heading>
      <Text color="white" opacity={0.85}>
        Hello, I&apos;m a web and mobile developer
        <br />
        based in Minas Gerais, Brazil.
      </Text>
    </Box>
  );
}

export default CardHeader;
