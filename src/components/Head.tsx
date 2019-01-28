import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const META = [
  { name: "description", content: "Sample" },
  { name: "keywords", content: "sample, something" }
];

const Head = props => <Helmet meta={META} {...props} />;

Head.propTypes = {
  title: PropTypes.string.isRequired
};

export default Head;
