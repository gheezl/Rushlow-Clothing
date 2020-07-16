import SHOP_DATA from "./shop.data.js"

import CartActionTypes from "../cart/cart-types.js"
import ShopActionsTypes from "./shop.types.js"

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionsTypes.UPDATE_COLLECTIONS:
            return {
                state: action.payload
            }


        default:
            return state
    }
}

export default shopReducer;