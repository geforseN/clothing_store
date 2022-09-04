import {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.action";

import {CartItem} from "../../store/cart/cart.types";

import {
  ItemCell,
  CheckoutItemContainer,
  ItemImageCell,
  Arrow,
  ItemRemoveCell,
  Quantity,
  ItemPriceDetails,
} from "./checkout-item.styles";



const CheckoutItem: FC<CheckoutItemProps> = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ItemImageCell>
        <img src={imageUrl} alt={`${name}`} />
      </ItemImageCell>
      <ItemCell>{name}</ItemCell>
      <ItemCell>
        <Quantity>
          <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
          <span>{quantity}</span>
          <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </Quantity>
      </ItemCell>
      <ItemCell>
        <div>${price * quantity}</div>
        <ItemPriceDetails>${price} × {quantity}qty</ItemPriceDetails>
      </ItemCell>
      <ItemRemoveCell onClick={clearItemHandler}>✕</ItemRemoveCell>
    </CheckoutItemContainer>
  );
};

export interface CheckoutItemProps {
  cartItem: CartItem
}
export default CheckoutItem;