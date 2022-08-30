import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {CartContext} from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart_item/cart_item.component";

import {CartDropdownContainer, CartItems, EmptyCartMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const {cartItems, setIsCartOpen} = useContext(CartContext);
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  }

  return (
    <CartDropdownContainer>
      {!cartItems.length ? <EmptyCartMessage>No items in cart</EmptyCartMessage> :
      <CartItems>
        {cartItems.map(cartItem =>
          // @ts-ignore fix never
          <CartItem key={cartItem.id} cartItem={cartItem} />
        )}
      </CartItems>
      }
      <Button onClick={buttonHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;