import styled from "styled-components";


export const BaseButton = styled.button`  
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0 2rem;
  min-width: 165px;
  width: auto;
  min-height: 50px;
  letter-spacing: 0.5px;
  font-size: 15px;
  
  background-color: black;
  color: white;
  
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: bolder;
  
  border: none;
  cursor: pointer;
  

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`
