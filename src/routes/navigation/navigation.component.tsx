import {Link, Outlet} from "react-router-dom";
import "./navigation.styles.scss"
import {ReactComponent as CrownLogo} from "../../assets/crown_logo.svg";


const Navigation = () => {
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
            <li><Link to='/auth' className='nav-link'>AUTH</Link></li>
            <li><Link to='/' className='nav-link'>CART</Link></li>
          </div>
        </ul>
      </nav>
      <Outlet />
  </>
  )
}

export default Navigation