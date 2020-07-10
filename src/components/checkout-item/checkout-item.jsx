import React, { Fragment } from "react";
import { connect } from "react-redux"

import clearItemFromCart from "../../redux/cart/cart.actions/clearItemFromCart.js"
import removeItem from "../../redux/cart/cart.actions/removeItem.js"
import addItem from "../../redux/cart/cart.actions/addItem.js"

import "./checkout-item.scss"

const CheckOutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <Fragment>
            <div className="checkout-item">
                <div className="image-container" >
                    <img alt="item" src={imageUrl} />
                </div>
                <span className="name" >{name}</span>
                <span className="quantity" >
                    <div className="arrow" onClick={() => removeItem(cartItem)} >&#10094;</div>
                    <span className="value" >{quantity}</span>
                    <div className="arrow" onClick={() => addItem(cartItem)} >&#10095;</div>
                </span>
                <span className="price" >${price}</span>
                <div onClick={() => clearItem(cartItem)} className="remove-button">&#10005;</div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);