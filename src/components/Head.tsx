import * as React from "react";
import Helmet from "react-helmet";

const META = [
  { name: "description", content: "Sample" },
  { name: "keywords", content: "sample, something" }
];

interface Props {
  title: string;
}

const Head = (props: Props): JSX.Element => <Helmet meta={META} {...props} />;

export default Head;
