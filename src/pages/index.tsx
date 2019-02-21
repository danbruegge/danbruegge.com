import * as React from "react";
import { graphql } from "gatsby";

import { Layout } from "components/Layout";
import { About, Props as AboutProps } from "components/About";

interface Props {
  data: {
    site: {
      siteMetadata: {
        pages: {
          about: AboutProps;
        };
      };
    };
  };
}

const AboutPage = ({ data }: Props): JSX.Element => {
  const page = data.site.siteMetadata.pages.about;
  return (
    <Layout title={page.title}>
      <About title={page.title} socialLinks={page.socialLinks} />
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
