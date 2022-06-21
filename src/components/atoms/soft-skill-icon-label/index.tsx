import { Box, Image, Text } from "@chakra-ui/react";

type Props = {
  icon: string;
  label: string;
};

function SoftSkillIconLabel({ icon, label }: Props) {
  return (
    <>
      <Box display="flex" alignItems="center" mb={5}>
        <Image
          borderRadius={6}
          src={`/img/memory/${icon}`}
          alt={label}
          w={9}
          mr={3}
        ></Image>
        <Text fontSize="1rem">{label}</Text>
      </Box>
    </>
  );
}

export default SoftSkillIconLabel;
