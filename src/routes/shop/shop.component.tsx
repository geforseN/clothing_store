import {FC, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import {fetchCategoriesStart} from "../../store/category/category.action";

import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";


const Shop: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  });

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
//                         ||
//   <Shop /> component    ||
//   should be like this   \/
//
//          <Options />
//          <Filter />
//          <ProductsQuickInfo>  //    CategoryName  &&  HowMuchProducts
//          <ChooseSortMethod />
//          <ProductsList /> // finally
//          <SelectPageNumber />
//