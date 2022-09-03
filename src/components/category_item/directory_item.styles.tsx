import styled from "styled-components";
import {Link} from "react-router-dom";


export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  object-fit: cover;
`

export const ShopNowLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90px;

  padding: 0 25px;
  background-color: rgba(255, 255, 255, 0.8);

  text-transform: uppercase;
  text-decoration-line: none;
  color: black;

  position: absolute;
  transition: background-color 0.1s linear;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
  
  &:focus {
    outline: blue ridge medium;
  }
`

export const CategoryItemContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  
  align-items: center;
  justify-content: center;
  
  height: 300px;
  margin: 0 7.5px 15px;

  &:hover {
    cursor: pointer;

    & ${BackgroundImg} {
      transform: scaleX(1.06);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${ShopNowLink} {
      cursor: pointer;
      transition: background-color 0.2s linear;
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
`
