import React, { FC } from "react";
import { graphql } from "gatsby";

import { Metadata } from "types";
import { Layout } from "components/Layout";
import { Vita } from "components/Vita";
import { VitaPageProps } from "components/Vita/types";

const VitaPage: FC<Metadata<VitaPageProps>> = ({ data }) => {
  const page = data.site.siteMetadata.pages.vita;

  return (
    <Layout title={page.title}>
      <Vita keySkills={page.keySkills} projects={page.projects} />
    </Layout>
  );
};

export default VitaPage;

export const query = graphql`
  query VitaPageQuery {
    site {
      siteMetadata {
        pages {
          vita {
            title
            keySkills
            projects {
              name
              info
            }
          }
        }
      }
    }
  }
`;
