import styled from "styled-components";

import Link from "../Link";

const TitleLink = styled(Link)`
  box-shadow: none;
  color: ${props => props.theme.header.title.color};
  display: block;
  font-size: ${props => props.theme.header.title.size};
  font-weight: ${props => props.theme.header.title.weight};
  text-decoration: none;
  text-align: right;
`;

export default TitleLink;
