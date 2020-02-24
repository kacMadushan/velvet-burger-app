import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light'
})`
    padding: 0 16px;
    background-color: #703b09;
`;

export const NavCollapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
    id: 'navbarSupportedContent'
})`
    background-color: transparent;
`;

export const NavbarNav = styled.ul.attrs({
    className: 'navbar-nav mr-auto'
})`
    width: 100%;
    justify-content: flex-end;
`;

export const NavbarItem = styled.li.attrs({
    className: 'nav-item'
})`
    background-color: transparent;
`;

const activeClassName = 'active'
export const NavbarLink = styled(NavLink).attrs({
    activeClassName: activeClassName,
    exact: true
})`
    display: block;
    color: #ffffff;
    font-weight: 600;
    font-size: 15px;
    padding: 14px 16px;
    border-bottom: 3px solid transparent;

    &.${activeClassName} {
        color: #ffffff;
        border-bottom: 3px solid #40a4c8;
        background-color: #8f5c2c;
    }

    &:hover {
        color: #ffffff;
        text-decoration: none;
    }
`;

export const NavbarBrand = styled(Link)`
    width: 61px;
    height: 44px;
    padding: 8px;
    border-radius: 3px;
    background-color: #ffffff;
`;