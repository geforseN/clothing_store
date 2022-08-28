import {FC} from "react";
import {Route, Routes} from "react-router-dom";


import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import './shop.style.scss'


const Shop: FC = () => {
  // TODO splice categoriesMap values
  //  because we only need some values, not all

  return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
  );
};


export default Shop;


//ADD <ProductsList prop={Context>} /> component
// because shop component can have more than 1 child components
// <Shop /> component      ||
//                         ||
// should be like this     \/
//
//          <Options />
//          <Filter />
//          <ProductsQuickInfo>  //    CategoryName  &&  HowMuchProducts
//          <ChooseSortMethod />
//          <ProductsList /> // finally
//          <SelectPageNumber />
//