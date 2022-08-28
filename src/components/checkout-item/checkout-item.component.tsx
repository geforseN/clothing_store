import {FC, useContext} from 'react';

import {CartContext} from '../../contexts/cart.context';

import './checkout-item.style.scss';
import {cartItem} from "../../contexts/categories.context";

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const {name, imageUrl, price, quantity} = cartItem;

  const {removeItemFromCart, addItemToCart, clearItemFromCart} =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <tr className='checkout-item-container'>
      <td className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </td>
      <td className='name'>
        <span> {name} </span>
      </td>
      <td style={{display: 'flex', justifyContent: "center", height: "inherit", alignItems: "center"}}>
        {}
        <div className='quantity'>
          <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={addItemHandler}>&#10095;</div>
        </div>
      </td>
      <td>
        <span className='price'> {price}</span>
      </td>
      <td className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </td>
    </tr>
  );
};

export interface CheckoutItemProps {
  cartItem: cartItem
}
export default CheckoutItem;