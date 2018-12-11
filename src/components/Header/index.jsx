import React from "react";
import styled from "styled-components";

import Navigation from "../Navigation";
import TitleLink from "./TitleLink";
import SubTitle from "./SubTitle";

const Header = ({ children, links, ...props }) => (
  <header {...props}>
    <TitleLink to="/">{"<//>"} danbruegge.com</TitleLink>
    <SubTitle>Software developer</SubTitle>
    <Navigation links={links} />
  </header>
);

export default styled(Header)`
  margin: 1rem 0.25rem 5rem;
`;
