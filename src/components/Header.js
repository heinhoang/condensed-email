import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className="main-header">
            <Navbar className="main-header__nav main-nav" color="faded" light expand="md">
                <Collapse className="main-nav__inner-nav inner-nav" navbar>
                    <NavbarBrand href="/">Condensed Email</NavbarBrand>
                    <Nav className="inner-nav__navbar" navbar>
                        <NavItem>
                            <NavLink href="/components/">
                                <FontAwesomeIcon icon="globe" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">
                                <FontAwesomeIcon icon="edit" />
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <div className="inner-nav__search">
                        <Input type="text" name="search" id="search" placeholder="Type to search" />
                    </div>
                    <div className="inner-nav__profile-thumb">
                        <span className="profile-thumb__text">John Doe</span>
                        <img src={`${process.env.PUBLIC_URL}/img/avatar.jpg`} alt="" />
                    </div>
                </Collapse>
                <button className="main-nav__toggle-icon">
                    <FontAwesomeIcon icon="toggle-off" />
                </button>
            </Navbar>
        </div>
    );
};

export default Header;