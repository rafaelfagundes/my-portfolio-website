import { useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

const StyledHorizontalLine = styled.div<{ color: string }>`
  height: 1px;
  width: 100%;
  background: ${(props) => props.color};
`;

function HorizontalLine() {
  const color = useColorModeValue("#eee", "#222");
  return <StyledHorizontalLine color={color}></StyledHorizontalLine>;
}

export default HorizontalLine;
