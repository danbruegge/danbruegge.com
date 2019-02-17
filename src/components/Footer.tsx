import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { Navigation } from "./Navigation";
import { Links } from "./Navigation/types";
import { ItemLink } from "./Navigation/ItemLink";

const query = graphql`
  {
    site {
      siteMetadata {
        titleText
        subTitleText
        footerLinks {
          name
          url
        }
      }
    }
  }
`;

const Link = styled(ItemLink)`
  font-size: 0.75em;
`;

const StyledFooter = styled.footer`
  margin: 3rem 0.25rem 0;
`;

export const Footer = (): JSX.Element => {
  const { site } = useStaticQuery(query);

  return (
    <StyledFooter>
      <Navigation links={site.siteMetadata.footerLinks} linkElement={Link} />
    </StyledFooter>
  );
};
