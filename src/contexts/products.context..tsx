import {createContext, useState} from "react";
import PRODUCTS from '../data/shop-data.json'


export const ProductsContext = createContext({
  products: [],
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


export interface product {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface cartItem extends product {
  quantity : number
}