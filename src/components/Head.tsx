import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        titleSuffix
        description
      }
    }
  }
`;

interface Props {
  title: string;
}

export const Head = ({ title }: Props): JSX.Element => {
  const { site } = useStaticQuery(query);

  return (
    <Helmet titleTemplate={`%s ${site.siteMetadata.titleSuffix}`}>
      <title>{title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
  );
};
