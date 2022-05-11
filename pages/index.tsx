import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Button from "../src/components/atoms/button";
import HorizontalLine from "../src/components/atoms/horizontal-line";
import CardHeader from "../src/components/molecules/card-header";
import SocialButtons from "../src/components/molecules/social-buttons";

const Blur = styled.div<{ bgColor: string }>`
  background: ${(props) => props.bgColor};
  backdrop-filter: blur(100px);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  const bgColor = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(0, 0, 0, 0.8)"
  );

  const boxColor = useColorModeValue("#fff", "rgba(0, 0, 0, 0.3)");

  return (
    <Flex backgroundImage="./img/bg.jpg" w="100vw" h="100vh">
      <Blur bgColor={bgColor}>
        <Box
          backgroundColor={boxColor}
          w={425}
          borderRadius={20}
          overflow="hidden"
          boxShadow="xl"
        >
          <CardHeader></CardHeader>
          <SocialButtons></SocialButtons>
          <HorizontalLine></HorizontalLine>
          <Flex justifyContent="center" p="25px 0px 5px 0px">
            <Button icon="plus" color>
              More
            </Button>
          </Flex>
        </Box>
      </Blur>
    </Flex>
  );
};

export default Home;
