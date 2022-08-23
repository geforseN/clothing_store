import {createContext, useState} from "react";
import PRODUCTS from '../data/shop-data.json'


export const ProductsContext = createContext({
  products: PRODUCTS,
})

export const ProductsProvider = ({children}: any)  => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = {products, setProducts};

  return (
    // @ts-ignore value
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
