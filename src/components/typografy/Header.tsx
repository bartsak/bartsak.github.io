import styled from "@emotion/styled";

export const Header = styled.h1`
  font-size: calc(${props => props.theme.variables.fontSize} + 10px);
  line-height: calc(${props => props.theme.variables.grid} * 2);
  margin: 0;
`