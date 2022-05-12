import { Box, Flex, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import type { NextPage } from "next";
import Button from "../src/components/atoms/button";
import HorizontalLine from "../src/components/atoms/horizontal-line";
import CardHeader from "../src/components/molecules/card-header";
import SocialButtons from "../src/components/molecules/social-buttons";

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const boxColor = useColorModeValue("#fff", "rgba(0, 0, 0, 0.3)");

  return (
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
      <Flex justifyContent="center" p="25px 0px 5px 0px">
        <Button isMobile={isMobile} icon="plus" color>
          More
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
