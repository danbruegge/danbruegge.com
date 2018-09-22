import React from "react";
import styled from "styled-components";

import Navigation from "../Navigation";
import TitleLink from "./TitleLink";

const Header = ({ children, links, ...props }) => (
  <header {...props}>
    <TitleLink to="/">{children}</TitleLink>
    <Navigation links={links} />
  </header>
);

export default styled(Header)`
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  text-align: center;

  @media (${props => props.theme.breakpoints.desktop}) {
    margin-top: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
