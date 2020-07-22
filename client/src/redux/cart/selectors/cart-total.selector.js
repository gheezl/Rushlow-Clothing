import { createSelector } from "reselect"

import selectCartItems from "./cart-items.selector.js"

const cartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity * cartItem.price,
            0
        )
)

export default cartTotal;