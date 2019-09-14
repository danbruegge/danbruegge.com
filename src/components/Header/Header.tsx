import React, { FC } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { Navigation } from "components/Navigation";

import { TitleLink } from "./TitleLink";
import { SubTitle } from "./SubTitle";

const query = graphql`
  {
    site {
      siteMetadata {
        titleText
        subTitleText
        headerLinks {
          name
          url
        }
      }
    }
  }
`;

const StyledHeader = styled.header`
  margin: 0 0.25rem 4.5rem;
`;

export const Header: FC = props => {
  const { site } = useStaticQuery(query);

  return (
    <StyledHeader {...props}>
      <TitleLink to="/">{site.siteMetadata.titleText}</TitleLink>
      <SubTitle>{site.siteMetadata.subTitleText}</SubTitle>
      <Navigation links={site.siteMetadata.headerLinks} />
    </StyledHeader>
  );
};
