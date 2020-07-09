import CartActionTypes from "./cart-types.js"
import addItemToCart from "./cart.utils.js"

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    console.log(state, action)
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:

            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action)
            }

        default:
            return state
    }
}

export default cartReducer;