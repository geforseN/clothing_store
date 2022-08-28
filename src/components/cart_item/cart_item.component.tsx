import {FC} from "react";

import {cartItem} from "../../contexts/categories.context";

import './cart_item.style.scss'


const CartItem: FC<CartItemProps> = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};


export interface CartItemProps {
  cartItem: cartItem
}

export default CartItem;