import styled from "styled-components";


export const CartDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  position: absolute;
  top: 90px;
  right: 40px;
  
  width: 346px;
  height: fit-content;
  padding: 20px;
  
  border: 2px solid black;
  background-color: white;
  
  z-index: 5;
  
  button {
    margin-top: 1rem;
  }
`

export const EmptyCartMessage = styled.span`
  font-size: 1.5rem;
  margin: 3rem auto;
  text-transform: capitalize;
`

export const CartItems = styled.div`
  height: 330px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: visible;
`

