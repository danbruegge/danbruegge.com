import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (${props => props.theme.breakpoints.desktop}) {
    justify-content: space-between;
  }
`;

export default List;
