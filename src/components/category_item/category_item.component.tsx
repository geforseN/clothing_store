import React, {FC} from 'react';
import {ICategory} from "../../ICategory";
import "./category_item.style..scss"

const CategoryItem: FC<CategoryItemProps> = ({category}) => {
  const {title, imageUrl} = category;

  // TODO position relative in CSS
  //  uncomment <img />
  //  refactor CSS styles
  return (
    <div className='category-container'>
      {/*<img className='background-image' src={`${imageUrl}`} alt=""/>*/}
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='category-body-container' >
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};


export interface CategoryItemProps {
  category: ICategory
}

export default CategoryItem;