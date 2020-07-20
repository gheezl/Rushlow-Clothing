import { takeLatest, put, all, call } from "redux-saga/effects";

import CartActionTypes from "./cart-types.js"
import UserActionTypes from "../user/user.types.js"

import clearCart from "./cart.actions/clearCart.js"


// sagas


export function* clearCartOnSignOut() {
    yield put(clearCart())
}


// listeners

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

// root saga

function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}

export default cartSagas;