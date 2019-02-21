import * as React from "react";
import styled from "styled-components";

import { BlinkingCharacter } from "components/BlinkingCharacter";

const Title = styled.h1`
  margin-bottom: 3rem;
`;

export interface Props {
  children: string;
}

export const PageTitle = ({ children }: Props): JSX.Element => (
  <Title>
    &gt;&nbsp;
    {children}
    <BlinkingCharacter>|</BlinkingCharacter>
  </Title>
);
