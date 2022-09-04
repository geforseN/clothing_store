import React, {FC} from 'react';

import {Directory} from "../../data/categories";

import {CategoryItemContainer, ShopNowLink, BackgroundImg} from "./directory_item.styles";


const DirectoryItem: FC<DirectoryItemProps> = (
  {directory: {title, imageUrl, route}}
) => (
  <CategoryItemContainer>
    <BackgroundImg src={imageUrl} alt={title}/>
    <ShopNowLink to={route}>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </ShopNowLink>
  </CategoryItemContainer>
);


export interface DirectoryItemProps {
  directory: Directory
}

export default DirectoryItem;