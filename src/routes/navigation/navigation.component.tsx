import {Outlet} from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {ReactComponent as CrownLogo} from "../../assets/crown_logo.svg";

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles"
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectIsCartOpen} from "../../store/cart/cart.selector";
import {signOutStart} from "../../store/user/user.action";


const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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

