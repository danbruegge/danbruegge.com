import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

const StyledLink = styled.a`
  color: ${props => props.theme.link.color};
`;

const Link = ({ to, ...oldProps }) => {
  const isInternal = /^\/(?!\/)/.test(to);
  const props = {
    ...oldProps,
    [isInternal ? "to" : "href"]: to
  };

  return <StyledLink as={isInternal && GatsbyLink} {...props} />;
};

Link.propTypes = {
  to: PropTypes.string.isRequired
};

export default Link;
