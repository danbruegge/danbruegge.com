import styled from "styled-components";

export default styled.section`
  padding: 0 0.75rem 0.5rem;

  @media (${props => props.theme.breakpoints.desktop}) {
    padding: 0 1.5rem 1rem;
  }
`;
