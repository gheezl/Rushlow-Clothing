import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg"

import { auth } from "../../firebase/firebase.js"
import { connect } from "react-redux"

import CartIcon from "../cart-icon/cart-icon.jsx"
import CartDropdown from "../cart-dropdown/cart-dropdown.jsx"

import "./header.scss";

const Header = ({ currentUser, cart }) => {
    return (
        <Fragment>
            <div className="header" >
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="options" >
                    <Link className="option" to="/shop" >
                        SHOP
                    </Link>
                    <Link className="option" to="/shop" >
                        CONTACT
                    </Link>
                    {
                        currentUser
                            ?
                            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                            :
                            <Link className="option" to="/signin">SIGN IN</Link>
                    }
                    <CartIcon />
                    {
                        cart
                            ?
                            <CartDropdown />
                            :
                            null
                    }

                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ user, cart }) => ({
    currentUser: user.currentUser,
    cart: cart.hidden
})

export default connect(mapStateToProps)(Header);