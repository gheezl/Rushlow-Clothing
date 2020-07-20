import UserActionTypes from "./user.types.js"
import CartActionTypes from "../cart/cart-types.js"

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                currentUser: null
            }


        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }

        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default userReducer;