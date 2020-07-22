import React, { Fragment, Component } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect";
import axios from "axios"

import StripeCheckout from "react-stripe-checkout"

import cartTotal from "../../redux/cart/selectors/cart-total.selector.js"




const StripeCheckoutButton = ({ price }) => {
    const PriceForStripe = price * 100
    const PublishableKey = "pk_test_51H4TcXKK0gugLsixM4c4qLYjnQwBfNCWsAR00gvt5cbVlKlq2MFfVaMKL5wGhK2r6FfLLF1KDt0HxwgArL8XPB4200qdnkBYD3"

    const onToken = (token) => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: PriceForStripe,
                token: token
            }
        }).then(response => {
            alert("Your payment was successful.")
            console.log(response)
        }).catch(error => {
            alert(
                "I am sorry, but there was an issue with your payment. Please be sure that you are using the provided credit card information."
            )
            console.log(error)
        })
    }

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
                token={onToken}
                stripeKey={PublishableKey}
            />
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    price: cartTotal
})


export default connect(mapStateToProps)(StripeCheckoutButton);