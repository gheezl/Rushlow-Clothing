import React, { Fragment } from "react";

import "./cart-dropdown.scss"

import CustomButton from "../custom-button/custom-button.jsx"

const CartDropdown = () => {
    return (
        <Fragment>
            <div className="cart-dropdown" >
                <div className="cart-items" >
                    <CustomButton>GO TO CHECKOUT</CustomButton>
                </div>
            </div>
        </Fragment>
    )
}

export default CartDropdown;