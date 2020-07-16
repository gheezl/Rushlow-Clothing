import ShopActionsTypes from "./shop.types.js"

const INITIAL_STATE = {
    state: null
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