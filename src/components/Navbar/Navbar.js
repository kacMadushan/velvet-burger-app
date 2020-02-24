import React from 'react';
import {
    Nav,
    NavCollapse,
    NavbarNav,
    NavbarItem,
    NavbarLink,
    NavbarBrand
} from './Navbar.sc';

import Image from '../Image/Image';
import NavbarToggler from './NavbarToggler';

const Navbar = () => (
    <Nav>
        <NavbarBrand to="/">
            <Image src="./assets/images/burger-logo.png" name="Velvet Burger" />
        </NavbarBrand>
        <NavbarToggler />
        <NavCollapse>
            <NavbarNav>
                <NavbarItem>
                    <NavbarLink to="/">Burger Build</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/checkout">Checkout</NavbarLink>
                </NavbarItem>
            </NavbarNav>
        </NavCollapse>
    </Nav>
);

export default Navbar;