import {FC} from "react";

import ProductCard from "../product-card/product-card.component";

import {TitleLink, Preview, CategoryPreviewContainer} from "./category-preview.styles";
import {CategoryItem} from "../../store/category/category.types";

const CategoryPreview: FC<CategoryPreviewProps> = ({title, products}) => (
  <CategoryPreviewContainer>
    <h2><TitleLink to={title}>{title}</TitleLink></h2>
    <Preview>
      {products.map(product =>
        <ProductCard key={product.id} product={product}/>
      )}
    </Preview>
  </CategoryPreviewContainer>
);


export interface CategoryPreviewProps {
  title: string
  products: Array<CategoryItem>
  start?: number
  end?: number
}


export default CategoryPreview;

