import * as React from "react";
import styled from "styled-components";

import { Navigation } from "components/Navigation";
import { Links } from "components/Navigation/types";

import { TitleLink } from "./TitleLink";
import { SubTitle } from "./SubTitle";

interface Props {
  children?: React.ReactNode;
  links: Links;
}

const titleText = "<//> danbruegge.com";

const StyledHeader = styled.header`
  margin: 0 0.25rem 4.5rem;
`;

export const Header = ({ links, ...props }: Props): JSX.Element => (
  <StyledHeader {...props}>
    <TitleLink to="/">{titleText}</TitleLink>
    <SubTitle>Software developer</SubTitle>
    <Navigation links={links} />
  </StyledHeader>
);
