import styled from "styled-components";
import {Link} from "react-router-dom";

// TODO better styling
export const NavigationContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: aliceblue;
`

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 15px;
`

export const NavLinks = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style-type: none;
`

export const NavLink = styled(LiLink)`
  padding: 10px 15px;
  cursor: pointer;
`

function LiLink(props: LiLinkProps) {
  const {className, children, to} = props;

  return (
    <li className={className}>
      <Link to={to}>
        {children}
      </Link>
    </li>
  )
}

export interface LiLinkProps {
  className?: string
  children: string
  to: string
}

