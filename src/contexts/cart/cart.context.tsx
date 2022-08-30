import {createContext, useEffect, useState} from "react";
import {product, cartItem} from "../categories.context";


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (state: boolean) => {},
  cartItems: [],
  addItemToCart: (item: product) => {},
  removeItemFromCart: (item: cartItem) => {},
  clearItemFromCart: (item: cartItem) => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({children}: any) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<cartItem>>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (cartItemToAdd: product) => {
    setCartItems(addProductItem(cartItems, cartItemToAdd));
  };

  const removeItemFromCart = (cartItemToRemove: cartItem) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear: cartItem) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    cartCount,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  }
  return (
    // @ts-ignore
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

function addProductItem(
  cartItems: Array<cartItem>, cartItemToAdd: product
) {
  const foundCardItem = cartItems.find(item => item.id == cartItemToAdd.id);

  if (!foundCardItem) {
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToAdd.id ? (
      { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity + 1 : 1 }
    ) : (
      cartItem
    )
  );
}

function removeCartItem(
  cartItems: Array<cartItem>, cartItemToRemove: cartItem
) {
  const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id) ! ;

  // remove item from the cart if item quantity === 1
  if (existingCartItem.quantity === 1) {
    return clearCartItem(cartItems, cartItemToRemove);
  }
  // TODO reduceCardItems one line function
  // const cartItemIndex = cartItems.findIndex(cartItems => cartItems.id === cartItemToRemove.id);
  // cartItems[cartItemIndex] = { ...cartItems[cartItemIndex], quantity: cartItem.quantity - 1 }


  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id ? (
      { ...cartItem, quantity: cartItem.quantity - 1 }
    ) : (
      cartItem
      )
  );
}

function clearCartItem(
  cartItems: Array<cartItem>, cartItemToClear: cartItem
) {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}