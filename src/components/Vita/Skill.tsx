import styled from "styled-components";

export const Skill = styled.span`
  background-color: ${props => props.theme.colors.grey};
  border-radius: 0.5em;
  box-shadow: -0.2rem 0.2rem 0px 0px ${props => props.theme.colors.primary};
  display: inline-block;
  font-size: 0.85em;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
`;
