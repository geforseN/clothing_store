import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {selectCartItems} from "../../store/cart/cart.selector";
import {setIsCartOpen} from "../../store/cart/cart.action";

import Button from "../button/button.component";
import CartItem from "../cart_item/cart_item.component";

import {CartDropdownContainer, CartItems, EmptyCartMessage} from "./cart-dropdown.styles";


const CartDropdown: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(false));
  }

  return (
    <CartDropdownContainer>
      {!cartItems.length ? <EmptyCartMessage>No items in cart</EmptyCartMessage> :
      <CartItems>
        {cartItems.map(cartItem =>
          <CartItem key={cartItem.id} cartItem={cartItem} />
        )}
      </CartItems>
      }
      <Button onClick={buttonHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;