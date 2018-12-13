import React from "react";

import Layout from "../components/Layout";
import Link from "../components/Link";

const title = "Index Page";

const IndexPage = () => (
  <Layout title={title}>
    <h1>{title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      Here is a <Link to="/about">Link</Link> example.
    </p>
  </Layout>
);

export default IndexPage;
