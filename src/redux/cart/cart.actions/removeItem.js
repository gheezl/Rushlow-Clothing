import CartActionTypes from "../cart-types.js"

const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export default removeItem;