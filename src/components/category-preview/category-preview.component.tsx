import './category-preview.style.scss'
import ProductCard from "../product-card/product-card.component";

import {FC} from "react";
import {ICategory} from "../../ICategory";
import {Link} from "react-router-dom";

const CategoryPreview: FC<CategoryPreviewProps> = ({category}) => {
  const {title, items} = category;
  const START = 0, END = 3;

  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title}
        </Link>
      </h2>
      <div className='preview'>
        {
          items?.slice(START, END).map(item =>
            <ProductCard key={item.id} product={item}/>
          )
        }
      </div>
    </div>
  );
};


export interface CategoryPreviewProps {
  category: ICategory
}


export default CategoryPreview;

