import styled from "styled-components";

export const Skill = styled.span`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.grey};
  display: inline-block;
  font-size: 0.85em;
  margin: 0.5rem;
  padding: 0.25rem 0.5rem;

  &:before,
  &:after {
    color: ${props => props.theme.colors.primary};
    display: inline-block;
    font-weight: 700;
  }

  &:before {
    content: "<";
  }

  &:after {
    content: "/>";
    margin-left: 0.5rem;
  }
`;
