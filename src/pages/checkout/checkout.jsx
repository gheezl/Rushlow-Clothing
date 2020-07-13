import React, { Fragment, Component } from "react";
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import selectCartItems from "../../redux/cart/selectors/cart-items.selector.js"
import cartTotal from "../../redux/cart/selectors/cart-total.selector.js"
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.jsx"
import hideFooter from '../../redux/footer/actions/toggleFooter.js';

import "./checkout.scss"
import CheckOutItem from "../../components/checkout-item/checkout-item.jsx";

class CheckOut extends Component {

    componentDidMount() {
        this.props.hideFooter()
    }

    render() {
        return (
            <Fragment>
                <div className="checkout-page">
                    <div className="checkout-header">
                        <span>CHECKOUT</span>
                    </div>
                    <div className="cart-items">
                        {
                            this.props.cartItems.length
                                ? this.props.cartItems.map(cartItem =>
                                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                                )
                                : <span className="empty-cart" >Your cart is empty</span>
                        }
                    </div>
                    <div className="total">
                        <span>TOTAL: ${this.props.total}</span>
                    </div>
                    <div className="disclaimer" >
                        DISCLAIMER
                </div>
                    <div className="test-warning">
                        *Please use the following test credit card for your payments, thank you!*
                </div>
                    <div className="test-card">
                        4242 4242 4242 4242 - Expires: 01/25 - CVV: 789
                </div>
                    <div className="stripe">
                        <StripeCheckoutButton />
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: cartTotal
})

const mapDispatchToProps = (dispatch) => ({
    hideFooter: () => dispatch(hideFooter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);