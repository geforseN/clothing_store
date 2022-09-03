import {FC} from "react";
import {useSelector} from "react-redux";

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from "../../components/spinner/spinner.component";

import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/category/category.selector";


const CategoriesPreview: FC = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? <Spinner /> : (
        Object.entries(categoriesMap).map(([title, products]) =>
          <CategoryPreview key={title} title={title} products={products} />
        )
      )}
    </>
  );
};

export default CategoriesPreview;