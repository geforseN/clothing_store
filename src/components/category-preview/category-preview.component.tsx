import {FC} from "react";

import ProductCard from "../product-card/product-card.component";
import {ICategoryPreview} from "../../interfaces";

import {TitleLink, Preview, CategoryPreviewContainer} from "./category-preview.styles";

const CategoryPreview: FC<CategoryPreviewProps> = ({category}) => {
  const {title, items} = category;
  const START = 0, END = 4;

  return (
    <CategoryPreviewContainer>
      <h2><TitleLink to={title}>{title}</TitleLink></h2>
      <Preview>
        {items.slice(START, END).map(item =>
          <ProductCard key={item.id} product={item}/>
        )}
      </Preview>
    </CategoryPreviewContainer>
  );
};


export interface CategoryPreviewProps {
  category: ICategoryPreview
}


export default CategoryPreview;

