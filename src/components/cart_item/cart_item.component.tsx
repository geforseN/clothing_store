import {FC} from "react";

import {cartItem} from "../../contexts/categories.context";

import {CartItemContainer, ItemDetails} from "./cart_item.styles";


const CartItem: FC<CartItemProps> = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};


export interface CartItemProps {
  cartItem: cartItem
}

export default CartItem;