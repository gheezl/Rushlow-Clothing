import { createSelector } from "reselect"

const selectCart = state => state.cart;

const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export default selectCartHidden;