import {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart_item/cart_item.component";

import './cart-dropdown.style.scss'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          // @ts-ignore fix never
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;