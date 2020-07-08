import React, { Fragment } from "react";
import { connect } from "react-redux"

import "./cart-dropdown.scss"

import CustomButton from "../custom-button/custom-button.jsx"
import CartItem from "../cart-item/cart-item.jsx"
import selectCartItems from "../../redux/cart/cart.selectors.js"
import selectCartItemsCount from "../../redux/cart/cart.selectors.js";

const CartDropdown = ({ cartItems }) => {
    return (
        <Fragment>
            <div className="cart-dropdown" >
                <div className="cart-items" >
                    {
                        cartItems.map(cartItem =>
                            <CartItem item={cartItem} />
                        )
                    }
                </div>
                <CustomButton>CHECKOUT</CustomButton>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.cartItems
})


export default connect(mapStateToProps)(CartDropdown);