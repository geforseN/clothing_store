import {FC, useContext} from 'react';

import {CartContext} from '../../contexts/cart.context';

import './checkout-item.style.scss';
import {cartItem} from "../../contexts/products.context.";

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const {name, imageUrl, price, quantity} = cartItem;

  const {removeItemFromCart, addItemToCart, clearItemFromCart} =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export interface CheckoutItemProps {
  cartItem: cartItem
}
export default CheckoutItem;