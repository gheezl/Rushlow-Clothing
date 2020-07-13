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
import displayFooter from "../../redux/footer/actions/displayFooter.js"
import hideFooter from '../../redux/footer/actions/toggleFooter.js';

import "./header.scss";


const Header = ({ currentUser, cart, hideFooter, displayFooter }) => {
    return (
        <Fragment>
            <div className="header" >
                <Link onClick={displayFooter} className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="options" >
                    <Link onClick={displayFooter} className="option" to="/shop" >
                        SHOP
                    </Link>
                    <Link onClick={displayFooter} className="option" to="/shop" >
                        CONTACT
                    </Link>
                    {
                        currentUser
                            ?
                            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
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
    hideFooter: () => dispatch(hideFooter()),
    displayFooter: () => dispatch(displayFooter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);