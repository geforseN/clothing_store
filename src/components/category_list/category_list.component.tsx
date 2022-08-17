import React from 'react';
import {ICategory} from "../../ICategory";
import CategoryItem from "../category_item/category_item.component";
import "./category_list.style.scss"

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className='categories-container'>
      {categories.map(category =>
        <CategoryItem key={category.id} category={category} />
      )}
    </div>
  );
};


interface CategoryListProps {
  categories: Array<ICategory>
}

export default CategoryList;