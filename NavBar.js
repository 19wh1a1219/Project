import React from 'react'
import{ 
    Nav,
    NavLink, 
    Bars, 
    NavMenu,
    NavBtn, 
    NavBtnLink 
} from './NavbarElements';

export const NavBar = () => {
  return (
    <div>
        <Nav>
            <NavLink to="/">
                <h1>Home</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                {/* <NavLink to="/Login">
                    Login
                </NavLink> */}
                {/* <NavLink to="/Register">
                    Register
                </NavLink> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/Main">Login/Register</NavBtnLink>
            </NavBtn>
        </Nav>
    </div>
  )
}