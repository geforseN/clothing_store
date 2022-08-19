import {useContext} from "react";
import {ProductsContext} from "../../contexts/products.context.";
import ProductCard from "../product-card/product-card.component";
import './shop.style.scss'

const Shop = () => {
  const {products} = useContext(ProductsContext);

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
  return (
    <div className="products-container">
      {products.map(product =>
        <ProductCard key={product.id} product={product} />
      )}
    </div>
  );
};

export default Shop;