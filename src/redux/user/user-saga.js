import { takeLatest, put, all, call } from "redux-saga/effects"

import UserActionTypes from "./user.types.js"

import { auth, createUserProfileDocument, googleProvider } from "../../firebase/firebase.js"


export function* signInWithGoogle() {
    try {
        const userRef = yield auth.signInWithPopup(googleProvider)
        console.log(userRef)
    } catch (error) {
        console.log(error)
    }
}


export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}

export default userSagas;