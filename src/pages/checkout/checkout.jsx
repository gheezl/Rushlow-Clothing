import React, { Fragment } from "react";
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import selectCartItems from "../../redux/cart/selectors/cart-items.selector.js"
import cartTotal from "../../redux/cart/selectors/cart-total.selector.js"

import "./checkout.scss"
import CheckOutItem from "../../components/checkout-item/checkout-item.jsx";

const CheckOut = ({ cartItems, total }) => {
    console.log(cartItems)
    return (
        <Fragment>
            <div className="checkout-page">
                <div className="checkout-header">
                    <span>CHECKOUT</span>
                </div>
                <div className="cart-items">
                    {
                        cartItems.length
                            ? cartItems.map(cartItem =>
                                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                            )
                            : <span className="empty-cart" >Your cart is empty</span>
                    }
                </div>
                <div className="total">
                    <span>TOTAL: ${total}</span>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: cartTotal
})

export default connect(mapStateToProps)(CheckOut);