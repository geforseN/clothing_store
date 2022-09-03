import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

import ProductCard from '../../components/product-card/product-card.component';

import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/category/category.selector";

import './category.styles';
import Spinner from "../../components/spinner/spinner.component";
import {CategoryContainer, LinkToPreviousPage, Title} from "./category.styles";


const Category = () => {
  const {category} = useParams();
  const navigate = useNavigate();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  const toPreviousPage = () => navigate(-1);

  return (
    <>
      <Title>{category}</Title>
      <LinkToPreviousPage onClick={toPreviousPage}>
        to previous page
      </LinkToPreviousPage>
      {isLoading ? <Spinner/> :
        <CategoryContainer>
          {products?.map(product =>
            <ProductCard key={product.id} product={product} />
          )}
        </CategoryContainer>
      }
    </>
  )
};

export default Category;