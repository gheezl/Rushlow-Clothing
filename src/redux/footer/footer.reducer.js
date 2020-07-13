import FooterActionTypes from "./footer-types.js"

const INITIAL_STATE = {
    hidden: false
}


const footerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FooterActionTypes.HIDE_FOOTER:
            return {
                ...state,
                hidden: true
            }

        case FooterActionTypes.DISPLAY_FOOTER:
            return {
                ...state,
                hidden: false
            }

        default:
            return state
    }
}

export default footerReducer;