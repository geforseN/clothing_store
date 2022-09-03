import {FC} from "react";

import {CartItemContainer, ItemDetails} from "./cart_item.styles";
import {CartItem as ICartItem} from "../../store/cart/cart.types";


const CartItem: FC<CartItemProps> = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};


export interface CartItemProps {
  cartItem: ICartItem
}

export default CartItem;