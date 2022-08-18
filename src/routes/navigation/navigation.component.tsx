import {Link, Outlet} from "react-router-dom";
import "./navigation.styles.scss"
import {ReactComponent as CrownLogo} from "../../assets/crown_logo.svg";
import {useContext} from "react";

import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";


const Navigation = () => {
  const {currentUser} = useContext(UserContext);

  return (
    <>
      <nav>
        <ul className='navigation'>
          <li>
            <Link to='/' className='logo-container'>
              <CrownLogo/>
            </Link>
          </li>
          <div className='nav-links-container'>
            <li><Link to='/' className='nav-link'>SHOP</Link></li>
            <li><Link to='/' className='nav-link'>CONTACT</Link></li>
            {currentUser ? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <li><Link to='/auth' className='nav-link'>SIGN IN</Link></li>
            )}
            <li><Link to='/' className='nav-link'>CART</Link></li>
          </div>
        </ul>
      </nav>
      <Outlet />
  </>
  )
}

export default Navigation