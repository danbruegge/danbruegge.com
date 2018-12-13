import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

const getThemeProp = key => props => props.theme.link[key];

const StyledLink = styled.a`
  box-shadow: 0px -0.15rem 0px 0px ${getThemeProp("colorUnderline")} inset;
  color: ${getThemeProp("color")};
  text-decoration: none;

  &:hover {
    box-shadow: none;
    color: ${getThemeProp("colorHover")};
  }
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
