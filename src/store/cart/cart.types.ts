import {CategoryItem} from "../category/category.types";

export enum CartActionTypes{
  SET_CART_ITEMS = 'SET_CART_ITEMS',
  SET_IS_CART_OPEN ='SET_IS_CART_OPEN',
}

export interface ICartState extends ICartInitialState{
  setIsCartOpen: () => {}
  addItemToCart: () => {}
  removeItemFromCart: () => {}
  clearItemFromCart: () => {}
}

export type CartItem = CategoryItem & {
  quantity: number
}

export interface ICartInitialState {
  isCartOpen: boolean
  cartItems: Array<CartItem>
  cartCount: number
  cartTotal: number
}

export interface IAction {
  type: string
  payload: {} // bad
}


