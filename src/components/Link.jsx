import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(GatsbyLink)`
  color: ${props => props.theme.link.color};
`;

const StyledAnchor = StyledLink.withComponent("a");

const Link = ({ children, to, ...props }) => {
  const isInternal = /^\/(?!\/)/.test(to);

  return isInternal ? (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  ) : (
    <StyledAnchor href={to} {...props}>
      {children}
    </StyledAnchor>
  );
};

export default Link;
