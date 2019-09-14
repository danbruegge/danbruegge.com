import React, { FC } from "react";
import styled from "styled-components";

import { BlinkingCharacter } from "components/BlinkingCharacter";

const Title = styled.h1`
  margin-bottom: 3rem;
`;

export const PageTitle: FC = ({ children }) => (
  <Title>
    &gt;&nbsp;
    {children}
    <BlinkingCharacter>|</BlinkingCharacter>
  </Title>
);
