import { Box, Flex, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Button from "../src/components/atoms/button";
import HorizontalLine from "../src/components/atoms/horizontal-line";
import ThemeToggle from "../src/components/atoms/theme-toggle";
import CardHeader from "../src/components/molecules/card-header";
import SocialButtons from "../src/components/molecules/social-buttons";

const Blur = styled.div<{ bgColor: string; isMobile: boolean }>`
  background: ${(props) => props.bgColor};
  backdrop-filter: blur(100px);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: ${(props) => (props.isMobile ? "undefined" : "center")};
  align-items: center;
  flex-direction: column;
`;

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const bgColor = useColorModeValue(
    "rgba(255, 255, 255, 0.6)",
    "rgba(0, 0, 0, 0.8)"
  );

  const boxColor = useColorModeValue("#fff", "rgba(0, 0, 0, 0.3)");

  return (
    <Flex
      backgroundImage="./img/bg.jpg"
      w="100vw"
      h="100vh"
      position="relative"
    >
      <Box
        top={isMobile ? "15px" : 10}
        right={isMobile ? "15px" : 10}
        w="96px"
        h="48px"
        position="absolute"
        zIndex={3}
      >
        <ThemeToggle></ThemeToggle>
      </Box>
      <Blur bgColor={bgColor} isMobile={isMobile}>
        <Box
          backgroundColor={boxColor}
          w={isMobile ? "100vw" : 425}
          borderRadius={isMobile ? "undefined" : 20}
          overflow="hidden"
          boxShadow="xl"
        >
          <CardHeader isMobile={isMobile}></CardHeader>
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
