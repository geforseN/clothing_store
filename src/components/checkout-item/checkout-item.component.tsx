import {FC, useContext} from 'react';

import {CartContext} from '../../contexts/cart/cart.context';

import {cartItem} from "../../contexts/categories.context";
import {
  ItemCell,
  CheckoutItemContainer,
  ItemImageCell,
  Arrow,
  ItemRemoveCell,
  Quantity, ItemPriceDetails
} from "./checkout-item.styles";

const CheckoutItem: FC<CheckoutItemProps> = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  const {removeItemFromCart, addItemToCart, clearItemFromCart} =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

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
  cartItem: cartItem
}
export default CheckoutItem;