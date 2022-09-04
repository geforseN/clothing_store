import styled from "styled-components";
import {ReactNode} from "react";

export const NoItems = styled.span`
  display: flex;
  justify-content: center;
  font-size: xx-large;
`

export const CheckoutItemsTable = styled.table`
  width: 55%;
  min-height: 30vh;
  margin: 50px auto 0;
  position: relative;
  text-align: center;
  border-collapse: collapse;
`

export const TableHeader = styled.thead`
  border: 1px solid red;
`

export const TableHeaderOneRow = (
  {className, children}: Props
) => (
  <TableHeader className={className}>
    <tr>{children}</tr>
  </TableHeader>
);

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

export const TableBody = styled.tbody`
  // so empty here
`

export const TableTotal = styled.tfoot`
  font-size: 36px;
`

export const TableTotalOneRow = (
  {className, children}: Props
) => (
  <TableTotal className={className}>
    <tr>{children}</tr>
  </TableTotal>
);

export const TotalText = styled.td`
  text-align: start;
`
export const TotalCost = styled.td`
  font-weight: bold;
`

type Props = {
  className?: string
  children?: Array<ReactNode>
}

export const CheckoutContainer = styled.div`
  // so empty here
`