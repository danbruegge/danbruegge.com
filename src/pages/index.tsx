import React, { FC } from "react";
import { graphql } from "gatsby";

import { Metadata } from "types";
import { Layout } from "components/Layout";
import { About } from "components/About";
import { AboutPageProps } from "components/About/types";

const AboutPage: FC<Metadata<AboutPageProps>> = ({ data }) => {
  const page = data.site.siteMetadata.pages.about;

  return (
    <Layout title={page.title}>
      <About socialLinks={page.socialLinks} />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        pages {
          about {
            title
            socialLinks {
              name
              url
            }
          }
        }
      }
    }
  }
`;
