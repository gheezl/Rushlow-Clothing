import React, { Fragment, Component } from "react"
import { connect } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { createStructuredSelector } from "reselect";
import cartTotal from "../../redux/cart/selectors/cart-total.selector.js"
import clearCart from "../../redux/cart/cart.actions/clearCart.js"



const StripeCheckoutButton = ({ price, clearCart }) => {
    const PriceForStripe = price * 100
    const PublishableKey = "pk_test_51H4TcXKK0gugLsixM4c4qLYjnQwBfNCWsAR00gvt5cbVlKlq2MFfVaMKL5wGhK2r6FfLLF1KDt0HxwgArL8XPB4200qdnkBYD3"
    return (
        <Fragment>
            <StripeCheckout
                label="Pay Now"
                name="CRWN Clothing"
                billingAddress
                shippingAddress
                image="https://sendeyo.com/up/d/f3eb2117da"
                description={`Your total is ${price} USD`}
                amount={PriceForStripe}
                panelLabel="Pay Now"
                token={clearCart}
                stripeKey={PublishableKey}
            />
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    price: cartTotal
})

const mapDispatchToProps = (dispatch) => ({
    clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton);