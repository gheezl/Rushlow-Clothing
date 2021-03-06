import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { createStructuredSelector } from "reselect"

import { connect } from "react-redux"

import CartIcon from "../cart-icon/cart-icon.jsx"
import CartDropdown from "../cart-dropdown/cart-dropdown.jsx"
import selectCartHidden from "../../redux/cart/selectors/hidden.selector.js"
import selectCurrentUser from "../../redux/user/user.selectors.js"

import { SignOutStart } from "../../redux/user/user.actions.js"

import "./header.scss";



const Header = ({ currentUser, cart, hideFooter, SignOutStart }) => {
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
                            <div className="option" onClick={SignOutStart}>SIGN OUT</div>
                            :
                            <Link className="option" onClick={hideFooter} to="/signin">SIGN IN</Link>
                    }
                    <CartIcon />
                    {
                        cart
                            ?
                            null
                            :
                            <CartDropdown />
                    }

                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cart: selectCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
    SignOutStart: () => dispatch(SignOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);