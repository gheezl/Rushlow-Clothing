import React, { Fragment } from "react";
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./checkout-item.scss"

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
    return (
        <Fragment>
            <div className="checkout-item">
                <div className="image-container" >
                    <img alt="item" src={imageUrl} />
                </div>
                <span className="name" >{name}</span>
                <span className="quantity" >{quantity}</span>
                <span className="price" >${price}</span>
                <div className="remove-button">✖️</div>
            </div>
        </Fragment>
    )
}

export default CheckOutItem;