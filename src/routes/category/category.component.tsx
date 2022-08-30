import {useContext, useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import {CategoriesContext} from '../../contexts/categories.context';

import './category.style.scss';

const Category = () => {
  const {category} = useParams();
  const navigate = useNavigate();
  const {categoriesMap} = useContext(CategoriesContext);
  // @ts-ignore
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    // @ts-ignore
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  const toPreviousPage = () => navigate(-1);

  return (
    <>
      <h2 className='category-title'>{category}</h2>
      <a className='prev-page' onClick={toPreviousPage}>
        to previous page
      </a>
      <div className='category-container'>
        {products && products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;