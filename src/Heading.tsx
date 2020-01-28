import styled from "styled-components";

export const Heading = styled.h1`
  font-weight: normal;
  font-style: italic;
`;

interface FlexProps {
  direction?: "row" | "column";
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction};
`;
