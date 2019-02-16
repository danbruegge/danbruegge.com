import * as React from "react";

import { Layout } from "components/Layout";

const title = "Curriculum Vitae";

const cv = (): JSX.Element => (
  <Layout title={title}>
    <h1>{title}</h1>
    <p>Welcome to page 2</p>
  </Layout>
);

export default cv;
