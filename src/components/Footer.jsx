import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import ItemLink from "./Navigation/ItemLink";

const Link = styled(ItemLink)`
  font-size: 0.75em;
`;

const Footer = ({ links, ...props }) => (
  <footer {...props}>
    <Navigation links={links} linkElement={Link} />
  </footer>
);

export default styled(Footer)`
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  text-align: center;

  @media (${props => props.theme.breakpoints.desktop}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
