import * as React from "react";
import styled from "styled-components";

import { Navigation } from "./Navigation";
import { Links } from "./Navigation/types";
import { ItemLink } from "./Navigation/ItemLink";

const Link = styled(ItemLink)`
  font-size: 0.75em;
`;

interface Props {
  links: Links;
}

const Footer = ({ links, ...props }: Props): JSX.Element => (
  <footer {...props}>
    <Navigation links={links} linkElement={Link} />
  </footer>
);

export default styled(Footer)`
  margin: 3rem 0.25rem 0;
`;