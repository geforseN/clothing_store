import {ActionWithPayload, createAction, withMatcher} from "../../utils/reducer/reducer.utils";
import {CartActionTypes, CartItem} from "./cart.types";
import {CategoryItem} from "../category/category.types";


export type SetIsCartOpen = ActionWithPayload<CartActionTypes.SET_IS_CART_OPEN, boolean>
export type SetCartItems = ActionWithPayload<CartActionTypes.SET_CART_ITEMS, Array<CartItem>>


export const setIsCartOpen = withMatcher(
  (state: boolean): SetIsCartOpen =>
    createAction(CartActionTypes.SET_IS_CART_OPEN, state)
);

export const setCartItems = withMatcher(
  (cartItems: Array<CartItem>): SetCartItems =>
    createAction(CartActionTypes.SET_CART_ITEMS, cartItems)
);


export const addItemToCart = (
  cartItems: Array<CartItem>, cartItemToAdd: CategoryItem
): SetCartItems => {
  const payload = addCategoryItem(cartItems, cartItemToAdd);
  return createAction(CartActionTypes.SET_CART_ITEMS, payload);
};

export const removeItemFromCart = (
  cartItems: Array<CartItem>, cartItemToRemove: CartItem
): SetCartItems => {
  const payload = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CartActionTypes.SET_CART_ITEMS, payload);
};

export const clearItemFromCart =(
  cartItems: Array<CartItem>, cartItemToClear: CartItem
): SetCartItems => {
  const payload = cartItemsWithoutItem(cartItems, cartItemToClear);
  return createAction(CartActionTypes.SET_CART_ITEMS, payload);
};




const addCategoryItem = (
  cartItems: Array<CartItem>, cartItemToAdd: CategoryItem
): Array<CartItem> => {
  const foundCardItem = getCartItemByID(cartItems, cartItemToAdd.id);

  if (!foundCardItem) return [...cartItems, {...cartItemToAdd, quantity: 1}]

  return cartItemsWithAddedItemQuantity(cartItems, cartItemToAdd.id);
}

const removeCartItem = (
  cartItems: Array<CartItem>, cartItemToRemove: CartItem
): Array<CartItem> => {
  const foundCardItem = getCartItemByID(cartItems, cartItemToRemove.id)!;

  if (foundCardItem.quantity === 1) return cartItemsWithoutItem(cartItems, cartItemToRemove);

  return cartItemsWithRemovedItemQuantity(cartItems, cartItemToRemove.id);
}


const cartItemsWithoutItem = (
  cartItems: Array<CartItem>, cartItemToClear: CartItem
): Array<CartItem> => (
  cartItems.filter(cartItem => cartItem !== cartItemToClear)
);

const getCartItemByID = (
  cartItems: Array<CartItem>, id: number
): CartItem | void => (
  cartItems.find(cartItem => cartItem.id === id)
);

const cartItemsWithRemovedItemQuantity = (
  cartItems: Array<CartItem>, id: number
): Array<CartItem> => (
  cartItems.map(cartItem => cartItem.id !== id ? cartItem : (
    { ...cartItem, quantity: cartItem.quantity - 1 }
  ))
);

const cartItemsWithAddedItemQuantity = (
  cartItems: Array<CartItem>, id: number
): Array<CartItem> => (
  cartItems.map(cartItem => cartItem.id !== id ? cartItem : (
    { ...cartItem, quantity: cartItem.quantity + 1 }
  ))
);
