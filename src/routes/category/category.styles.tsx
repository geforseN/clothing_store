import styled from "styled-components";


export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`

export const Title = styled.h2`
  display: inline-block;
  font-size: 38px;
  margin: 0 12px 25px 0;
  text-transform: uppercase;
`

// TODO change LinkToPreviousPage from button to Link
export const LinkToPreviousPage = styled.button`
  padding: 4px 4px 0;
  text-transform: capitalize;
  border-bottom: 2px black dashed;

  //background-color: darkslategrey;
  background-color: grey;
  cursor: pointer;
  transition: color 0.2s linear, border-color 0.2s linear;

  &:hover {
    color: orangered;
    border-color: orangered;
  }
`