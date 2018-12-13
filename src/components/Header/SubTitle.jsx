import styled from "styled-components";

const SubTitle = styled.p`
  color: ${props => props.theme.header.subtitle.color};
  font-size: ${props => props.theme.header.subtitle.size};
  font-weight: ${props => props.theme.header.subtitle.weight};
  margin: 0.25rem 0 3rem;
  text-align: right;
`;

export default SubTitle;
