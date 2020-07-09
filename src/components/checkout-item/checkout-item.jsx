import React, { Fragment } from "react";
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import clearItemFromCart from "../../redux/cart/cart.actions/clearItemFromCart.js"

import "./checkout-item.scss"

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity }, clearItem }) => {
    return (
        <Fragment>
            <div className="checkout-item">
                <div className="image-container" >
                    <img alt="item" src={imageUrl} />
                </div>
                <span className="name" >{name}</span>
                <span className="quantity" >{quantity}</span>
                <span className="price" >${price}</span>
                <div onClick={() => clearItem()} className="remove-button">X</div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);