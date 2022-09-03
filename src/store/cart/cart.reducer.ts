import {CartItem} from "./cart.types"
import {AnyAction} from "redux";
import {setCartItems, setIsCartOpen} from "./cart.action";

export type CartState = {
  readonly isCartOpen: boolean
  readonly cartItems: Array<CartItem>
}

const cartInitialState: CartState = {
  isCartOpen: false,
  cartItems: [],
}

export const cartReducer = (state = cartInitialState, action: AnyAction) => {
  if (setIsCartOpen.match(action)) {
    return {...state, isCartOpen: action.payload}
  }
  if (setCartItems.match(action)) {
    return {...state, isCartOpen: action.payload}
  }

  return state;
}
