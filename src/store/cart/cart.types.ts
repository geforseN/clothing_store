import {CategoryItem} from "../category/category.types";

export enum CartActionTypes{
  SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
}

export type CartItem = CategoryItem & {
  quantity: number
}
