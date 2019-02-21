import * as React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin-bottom: 3rem;
`;

export interface Props {
  children: string;
}

export const PageTitle = ({ children }: Props): JSX.Element => (
  <Title>&gt; {children}</Title>
);
