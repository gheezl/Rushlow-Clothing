import React, { Fragment } from "react";
import { connect } from "react-redux"

import "./cart-dropdown.scss"

import CustomButton from "../custom-button/custom-button.jsx"
import CartItem from "../cart-item/cart-item.jsx"

const CartDropdown = ({ cart }) => {
    return (
        <Fragment>
            <div className="cart-dropdown" >
                <div className="cart-items" >
                    {
                        cart.map(cartItem =>
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
    cart: cart.cartItems
})


export default connect(mapStateToProps)(CartDropdown);