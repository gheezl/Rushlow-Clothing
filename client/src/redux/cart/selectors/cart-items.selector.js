import { createSelector } from "reselect"

const selectCart = state => state.cart;

const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export default selectCartItems;