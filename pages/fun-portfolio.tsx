import { Box, Heading, Text } from "@chakra-ui/react";
import SkillsBlockBreaker from "../src/components/organisms/SkillsBlockBreaker";

function FunPortfolio() {
  return (
    <>
      <Box>
        <Heading mb={3}>My Skills</Heading>
        <Text mb={5}>
          These below are my skills, you have 3 lives to try to break all of
          them. Let&apos;s go!
        </Text>
        <SkillsBlockBreaker></SkillsBlockBreaker>
      </Box>
    </>
  );
}

export default FunPortfolio;
