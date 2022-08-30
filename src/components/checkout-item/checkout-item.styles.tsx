import styled from "styled-components";


export const CheckoutItemContainer = styled.tr`
  width: 100%;
  min-height: 100px;
  border-bottom: 2px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
`

export const ItemCell = styled.td`
  position: inherit;
  border: 2px solid darkgrey;
  z-index: 1;
`

export const ItemImageCell = styled(ItemCell)`
  background-color: darkgrey;
  
  img {
    width: 100%;
    height: 100%;
  }
`

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const ItemRemoveCell = styled(ItemCell)`
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: crimson;
  }
`

export const Arrow = styled.div`
  cursor: pointer;
`

export const ItemPriceDetails = styled.div`
  font-size: small;
`