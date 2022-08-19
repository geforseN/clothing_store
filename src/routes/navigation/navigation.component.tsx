import {Link, Outlet} from "react-router-dom";
import {useContext} from "react";

import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {ReactComponent as CrownLogo} from "../../assets/crown_logo.svg";

import "./navigation.style.scss"
import {CartContext} from "../../contexts/cart.context";


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <>
      <nav className='navigation'>
        <Link to='/' className='logo-container'>
          <CrownLogo className='logo' />
        </Link>
        <ul className='nav-links-container'>
            <li>
              <Link to='/shop' className='nav-link'>
                SHOP
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-link' >
                CONTACT
              </Link>
            </li>
            {currentUser ? (
              <span className='nav-link' onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <li>
                <Link to='/auth' className='nav-link'>
                  SIGN IN
                </Link>
              </li>
            )}
            <li>
              <CartIcon />
            </li>
        </ul>
        {isCartOpen && <CartDropdown /> }
      </nav>
      <Outlet />
  </>
  )
}

export default Navigation


//
//
// import { Fragment, useContext } from 'react';
// import { Outlet, Link } from 'react-router-dom';
//
// import { UserContext } from '../../contexts/user.context';
// import { CartContext } from '../../contexts/cart.context';
//
// import CartIcon from '../../components/cart-icon/cart-icon.component';
// import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
// import { ReactComponent as CrownLogo } from '../../assets/crown_logo.svg';
//
// import { signOutUser } from '../../utils/firebase/firebase.utils';
//
// import './navigation.style.scss';
//
// const Navigation = () => {
//   const { currentUser } = useContext(UserContext);
//   const { isCartOpen } = useContext(CartContext);
//
//   return (
//     <Fragment>
//       <nav className='navigation'>
//         <Link className='logo-container' to='/'>
//           <CrownLogo className='logo' />
//         </Link>
//         <div className='nav-links-container'>
//           <Link className='nav-link' to='/shop'>
//             SHOP
//           </Link>
//
//           {currentUser ? (
//             <span className='nav-link' onClick={signOutUser}>
//               SIGN OUT
//             </span>
//           ) : (
//             <Link className='nav-link' to='/auth'>
//               SIGN IN
//             </Link>
//           )}
//           <CartIcon />
//         </div>
//         {isCartOpen && <CartDropdown />}
//       </nav>
//       <Outlet />
//     </Fragment>
//   );
// };
//
// export default Navigation;