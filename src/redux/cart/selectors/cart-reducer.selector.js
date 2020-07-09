import { createSelector } from "reselect"

import selectCartItems from "./cart-items.selector.js"

const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)


export default selectCartItemsCount;