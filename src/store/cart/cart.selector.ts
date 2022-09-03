import {createSelector} from "reselect";
import {CartState} from "./cart.reducer";
import {RootState} from "../store";

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (total, {quantity, price}) => total + quantity * price, 0
  )
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (total, {quantity}) => total + quantity, 0
  )
);


