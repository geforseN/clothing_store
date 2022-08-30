import styled from "styled-components";

export const NoItems = styled.span`
  display: flex;
  justify-content: center;
  font-size: xx-large;
`

export const CheckoutContainer = styled.div`

`

export const CheckoutItemsTable = styled.table`
  width: 55%;
  min-height: 30vh;
  margin: 50px auto 0;
  position: relative;
  text-align: center;
  border-collapse: collapse;
`

export const ItemsTableHeader = styled.thead`
  border: 1px solid red;
`
export const HeaderCell = styled.th`
  text-transform: capitalize;
  width: 23%;
  padding: 1rem 0.5rem;

  position: sticky;
  top: 0;
  z-index: 1;
  
  border: 2px solid darkgrey;
  background: aliceblue;

  &:last-child {
    width: 8%;
  }
`

export const ItemsTableTotal = styled.tfoot`
  font-size: 36px;
`