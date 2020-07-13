import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { createStructuredSelector } from "reselect"

import { auth } from "../../firebase/firebase.js"
import { connect } from "react-redux"

import CartIcon from "../cart-icon/cart-icon.jsx"
import CartDropdown from "../cart-dropdown/cart-dropdown.jsx"
import selectCartHidden from "../../redux/cart/selectors/hidden.selector.js"
import selectCurrentUser from "../../redux/user/user.selectors.js"


import "./header.scss";
import toggleFooter from '../../redux/footer/actions/toggleFooter.js';

const Header = ({ currentUser, cart, toggleFooter }) => {
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
                            <Link className="option" onClick={toggleFooter} to="/signin">SIGN IN</Link>
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
    toggleFooter: () => dispatch(toggleFooter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);