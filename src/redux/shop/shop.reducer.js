import SHOP_DATA from "./shop.data.js"
import CartActionTypes from "../cart/cart-types.js"

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return SHOP_DATA

        default:
            return state
    }
}

export default shopReducer;