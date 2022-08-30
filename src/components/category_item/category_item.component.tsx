import React, {FC} from 'react';
import {ICategory} from "../../interfaces";
import {CategoryItemContainer, ShopNowLink, BackgroundImg} from "./category_item.styles";

const CategoryItem: FC<CategoryItemProps> = ({category}) => {
  const {title, imageUrl} = category;

  return (
    <CategoryItemContainer>
      <BackgroundImg src={`${imageUrl}`} alt={title}/>
      <ShopNowLink to={`shop/${title}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </ShopNowLink>
    </CategoryItemContainer>
  );
};


export interface CategoryItemProps {
  category: ICategory
}

export default CategoryItem;