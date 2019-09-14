import React, { FC } from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

const StyledLink = styled.a`
  box-shadow: 0px 0.2rem 0px 0px ${props => props.theme.link.colorUnderline};
  color: ${props => props.theme.link.color};
  text-decoration: none;

  &:hover {
    box-shadow: none;
    color: ${props => props.theme.link.colorHover};
  }
`;

export interface Props {
  to: string;
}

export const Link: FC<Props> = ({ to, ...oldProps }) => {
  const isInternal = /^\/(?!\/)/.test(to);
  const props = {
    ...oldProps,
    [isInternal ? "to" : "href"]: to,
    as: isInternal && GatsbyLink,
    activeClassName: "active"
  };

  return <StyledLink {...props} />;
};
