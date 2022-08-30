import React, {FC} from 'react';

import {ICategory} from "../../interfaces";
import CategoryItem from "../category_item/category_item.component";

import {CategoriesContainer} from "./category_list.styles";

const CategoryList: FC<CategoryListProps> = ({categories}) => {
  return (
    <CategoriesContainer>
      {categories.map(category =>
        <CategoryItem key={category.id} category={category} />
      )}
    </CategoriesContainer>
  );
};


interface CategoryListProps {
  categories: Array<ICategory>
}

export default CategoryList;