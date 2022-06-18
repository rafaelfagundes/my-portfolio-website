import { Box, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import MemoryGame from "../src/components/organisms/MemoryGame";
import SkillsBlockBreaker from "../src/components/organisms/SkillsBlockBreaker";

const StyledPortfolio = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

function FunPortfolio() {
  return (
    <StyledPortfolio>
      <Box h="100%">
        <Box h={20}></Box>

        <Heading mb={3}>Tech Skills</Heading>
        <Text mb={5}>
          These below are my skills, you have 3 lives to try to break all of
          them. Let&apos;s go!
        </Text>
        <SkillsBlockBreaker></SkillsBlockBreaker>
        <Box h={20}></Box>

        <Heading mb={3}>Skills</Heading>
        <Text mb={5}>In similique porro quia dolore debitis.</Text>
        <MemoryGame></MemoryGame>
        <Box h={20}></Box>
      </Box>
    </StyledPortfolio>
  );
}

export default FunPortfolio;
