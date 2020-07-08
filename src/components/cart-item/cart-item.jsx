import React, { Fragment } from 'react';

import "./cart-item.scss"



const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <Fragment>
            <div className="cart-item" >
                <img src={imageUrl} alt="item" />
                <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price">
                        {quantity} x ${price}
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default CartItem;