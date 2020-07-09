import CartActionTypes from "../cart-types.js"

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export default addItem;