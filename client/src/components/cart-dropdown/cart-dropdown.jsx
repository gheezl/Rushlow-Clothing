import React, { Fragment } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect"

import "./cart-dropdown.scss"

import CustomButton from "../custom-button/custom-button.jsx"
import CartItem from "../cart-item/cart-item.jsx"

import selectCartItems from "../../redux/cart/selectors/cart-items.selector.js"
import toggleCartHidden from "../../redux/cart/cart.actions/toggleCartHidden.js"

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <Fragment>
            <div className="cart-dropdown" >
                <div className="cart-items" >
                    {
                        cartItems.length ?
                            cartItems.map(cartItem =>
                                <CartItem item={cartItem} />
                            )
                            :
                            <span className="empty-message">Your cart is empty</span>
                    }
                </div>
                <CustomButton onClick={() => {
                    history.push("/checkout");
                    dispatch(toggleCartHidden())
                }}
                >CHECKOUT</CustomButton>
            </div>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));