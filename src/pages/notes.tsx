import * as React from "react";

import { Layout } from "components/Layout";

const title = "Notes";

const notes = (): JSX.Element => (
  <Layout title={title}>
    <h1>{title}</h1>
    <p>Welcome to page 2</p>
  </Layout>
);

export default notes;
