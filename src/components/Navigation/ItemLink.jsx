import styled from "styled-components";

import Link from "../Link";

const ItemLink = styled(Link)`
  display: inline-block;
  padding: 0.25rem;
  text-decoration: none;

  @media (${props => props.theme.breakpoints.desktop}) {
    padding: 0.5rem 0;
  }
`;

export default ItemLink;
