import {createContext, useState} from "react";
import {product as cartItem} from "./products.context.";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (state: boolean) => {},
});

export const CartProvider = ({children}: any) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const value = {isCartOpen, setIsCartOpen, products, setProducts}

  // @ts-ignore
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
