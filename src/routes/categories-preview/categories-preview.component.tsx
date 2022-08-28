import {useContext} from 'react';

import {CategoriesContext} from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const {categoriesMap} = useContext(CategoriesContext);

  return (
    <>
      {Object.entries(categoriesMap).map(([title, items]) =>
        <CategoryPreview key={title} category={{title, items}} />
      )}
    </>
  );
};

export default CategoriesPreview;