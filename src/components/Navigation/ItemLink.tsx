import styled from "styled-components";

import { Link } from "components/Link";

export const ItemLink = styled(Link)`
  display: inline-block;
  margin: 0.5rem 0;
  letter-spacing: 0.1rem;

  &.active {
    font-weight: 600;
  }
`;
