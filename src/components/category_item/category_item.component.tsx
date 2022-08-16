import React from 'react';
import {ICategory} from "../../ICategory";

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { title, imageUrl, imageAlt } = category;

  return (
    <div className='category-container'>
      <img src={`${imageUrl}`} alt={`${imageAlt}`} />
      <div className='container-body-container' >
        <h2>{title.toLocaleUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};


export interface CategoryItemProps {
  category: ICategory
}

export default CategoryItem;