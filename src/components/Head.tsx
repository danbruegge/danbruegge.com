import React, { FC } from "react";
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

export const Head: FC<Props> = ({ title }) => {
  const { site } = useStaticQuery(query);

  return (
    <Helmet titleTemplate={`%s ${site.siteMetadata.titleSuffix}`}>
      <title>{title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
  );
};
