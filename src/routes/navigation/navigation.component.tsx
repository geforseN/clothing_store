import {Outlet} from "react-router-dom";
import {useContext} from "react";

import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {ReactComponent as CrownLogo} from "../../assets/crown_logo.svg";

import {signOutUser} from "../../utils/firebase/firebase.utils";

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles"


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/' ><CrownLogo /></LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          <NavLink to='/contacts'>CONTACT</NavLink>
          {!currentUser ? <NavLink to='/auth'>SIGN IN</NavLink> :
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
          }
          <NavLink as='li'><CartIcon /></NavLink>
        </NavLinks>
        {isCartOpen && <CartDropdown /> }
      </NavigationContainer>
      <Outlet />
  </>
  )
}

export default Navigation

