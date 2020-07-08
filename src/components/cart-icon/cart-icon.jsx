import React, { Fragment } from "react"
import { connect } from "react-redux"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

import "./cart-icon.scss"

import toggleCartHidden from "../../redux/cart/cart.actions.js"


const CartIcon = ({ toggleCartHidden, cartTotal }) => {
    return (
        <Fragment>
            <div className="cart-icon" onClick={toggleCartHidden}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count" >{
                    cartTotal
                }</span>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart }) => ({
    cartTotal: cart.cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);