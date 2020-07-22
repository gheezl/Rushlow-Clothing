import ShopActionsTypes from "./shop.types.js"

const INITIAL_STATE = {
    state: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionsTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                state: null,
                isFetching: true
            }

        case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                state: action.payload
            }

        case ShopActionsTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }


        default:
            return state
    }
}

export default shopReducer;