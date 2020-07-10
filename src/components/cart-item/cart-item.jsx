import React, { Fragment } from 'react';
import { connect, connectAdvanced } from "react-redux"
import { createStructuredSelector } from "reselect"

import clearItemFromCart from "../../redux/cart/cart.actions/clearItemFromCart.js"

import "./cart-item.scss"



const CartItem = ({ item, clearItemFromCart }) => {
    const { imageUrl, price, name, quantity } = item
    return (
        <Fragment>
            <div className="cart-item" >
                <img src={imageUrl} alt="item" />
                <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price">
                        {quantity} x ${price}
                    </span>
                    <span className="remove" onClick={() => clearItemFromCart(item)}>&#10005;</span>
                </div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);