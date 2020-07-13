import FooterActionTypes from "./footer-types.js"

const INITIAL_STATE = {
    hidden: false
}


const footerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FooterActionTypes.TOGGLE_FOOTER_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state
    }
}

export default footerReducer;