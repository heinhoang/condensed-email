import React from 'react';
import {
    NavbarToggler,
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className="main-header">
            <Navbar className="main-header__navbar main-navbar" color="faded" light expand="lg">
                <NavbarToggler onClick={this.toggle} />
                <div className="main-header__info d-lg-none">
                    Inbox(12)
                </div>
                <Collapse className="main-navbar__inner-navbar inner-navbar" navbar>
                    <NavbarBrand className="inner-navbar__brand" href="/">
                        <img className="logoImg" src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt=""/>
                    </NavbarBrand>
                    <Nav className="inner-navbar__navbar" navbar>
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
                    <div className="inner-navbar__search">
                        <FontAwesomeIcon icon="search" /> <span>Type to <strong>search</strong></span>
                    </div>
                    <div className="inner-navbar__profile-thumb">
                        <span className="profile-thumb__text">John Doe</span>
                        <img className="profile-thumb__img" src={`${process.env.PUBLIC_URL}/img/avatar.jpg`} alt="" />
                    </div>
                </Collapse>
                <span className="main-navbar__toggle-icon">
                    <FontAwesomeIcon icon="toggle-off" size="lg" />
                </span>
            </Navbar>
        </div>
    );
};

export default Header;