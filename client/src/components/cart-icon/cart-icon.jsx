import React, { Fragment } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

import "./cart-icon.scss"

import toggleCartHidden from "../../redux/cart/cart.actions/toggleCartHidden.js"
import selectCartItemsCount from "../../redux/cart/selectors/cart-reducer.selector.js"


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

const mapStateToProps = createStructuredSelector({
    cartTotal: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);