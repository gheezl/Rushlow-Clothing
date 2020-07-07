import React, { Fragment } from "react"
import { connect } from "react-redux"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

import "./cart-icon.scss"

import toggleCartHidden from "../../redux/cart/cart.actions.js"


const CartIcon = ({ toggleCartHidden }) => {
    return (
        <Fragment>
            <div className="cart-icon" onClick={toggleCartHidden}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count" >0</span>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);