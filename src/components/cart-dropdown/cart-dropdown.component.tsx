import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {CartContext} from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart_item/cart_item.component";

import './cart-dropdown.style.scss'

const CartDropdown = () => {
  const {cartItems, setIsCartOpen} = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  const buttonHandler = () => {
    goToCheckoutHandler()
    setIsCartOpen(false)
  }

  return (
    <div className='cart-dropdown-container'>
      {cartItems.length === 0 ? <div>No items in cart</div> :
      <div className='cart-items'>
        {cartItems.map((item) => (
          // @ts-ignore fix never
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      }
      <Button onClick={buttonHandler}>go to checkout</Button>
    </div>
  );
};

export default CartDropdown;