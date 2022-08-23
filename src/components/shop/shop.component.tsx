import {FC, useContext} from "react";
import {ProductsContext} from "../../contexts/products.context.";
import ProductCard from "../product-card/product-card.component";
import './shop.style.scss'

const Shop: FC = () => {
  const {products} = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map(product =>
        // @ts-ignore fix never
        <ProductCard key={product.id} product={product} />
      )}
    </div>
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