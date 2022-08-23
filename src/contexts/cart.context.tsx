import {createContext, useState} from "react";
import {product as cartItem} from "./products.context.";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (state: boolean) => {},
  cartItems: [],
  addItemToCart: (item: cartItem) => {},
});

const addCardItem = (
  cartItems: Array<cartItem>, cartItemToAdd: cartItem
) => {
  const foundCardItem = cartItems.find(item => item.id == cartItemToAdd.id);

  if (!foundCardItem) {
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToAdd.id ? (
      { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity + 1 : 1 }
      ) : (
        cartItem
    ));
}


export const CartProvider = ({children}: any) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<cartItem>>([]);

  const addItemToCart = (cartItemToAdd: cartItem) =>
    setCartItems(addCardItem(cartItems, cartItemToAdd));

  const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart}
  // @ts-ignore
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
