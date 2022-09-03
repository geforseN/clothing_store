import {FC} from "react";

import ProductCard from "../product-card/product-card.component";

import {TitleLink, Preview, CategoryPreviewContainer} from "./category-preview.styles";
import {CategoryItem} from "../../store/category/category.types";

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  const START = 0, END = 4;

  return (
    <CategoryPreviewContainer>
      <h2><TitleLink to={title}>{title}</TitleLink></h2>
      <Preview>
        {products.slice(START, END).map(product =>
          <ProductCard key={product.id} product={product}/>
        )}
      </Preview>
    </CategoryPreviewContainer>
  );
};


export interface CategoryPreviewProps {
  title: string
  products: Array<CategoryItem>
}


export default CategoryPreview;

