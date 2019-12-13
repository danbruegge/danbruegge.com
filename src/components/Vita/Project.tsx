import React, { FC } from "react";
import styled from "styled-components";

import { Project as Props } from "./types";

const Img = styled.img<{ size: number }>`
  height: auto;
  width: ${props => 15 * props.size}%;
  opacity: 0.75;
  margin: 1rem;

  @media (${props => props.theme.breakpoints.desktop}) {
    width: ${props => 18 * props.size}%;
  }
`;

export const Project: FC<Props> = ({ name, info, size }) => (
  <Img src={`../images/projects/${name}.svg`} alt={info} size={size} />
);
