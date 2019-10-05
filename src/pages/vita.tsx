import React, { FC } from "react";

import { Metadata } from "types";
import { Layout } from "components/Layout";
import { Vita } from "components/Vita";

interface Props {
  vita: {
    title: string;
  };
}

const VitaPage: FC<Metadata<Props>> = ({ data }) => {
  const page = data.site.siteMetadata.pages.vita;

  return (
    <Layout title={page.title}>
      <Vita />
    </Layout>
  );
};

export default VitaPage;
