import React from 'react';
import {ICategory} from "../../ICategory";
import CategoryItem from "../category_item/category_item.component";

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className='category-list'>
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