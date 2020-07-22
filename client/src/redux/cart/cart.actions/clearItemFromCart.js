import CartActionTypes from "../cart-types.js"

const clearItemFromCart = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export default clearItemFromCart;