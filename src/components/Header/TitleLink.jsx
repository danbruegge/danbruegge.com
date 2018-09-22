import styled from "styled-components";

import Link from "../Link";

const TitleLink = styled(Link)`
  color: ${props => props.theme.title.color};
  display: inline-block;
  font-size: ${props => props.theme.title.size};
  font-weight: ${props => props.theme.title.weight};
  margin-bottom: 2rem;
  text-decoration: none;
`;

export default TitleLink;
