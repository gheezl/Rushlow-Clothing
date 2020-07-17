import { takeLatest, put, all, call } from "redux-saga/effects"

import UserActionTypes from "./user.types.js"

import { auth, createUserProfileDocument, googleProvider } from "../../firebase/firebase.js"

import { googleSignInSuccess, googleSignInFailure } from "../user/user.actions.js"



export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(
            googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        )
    } catch (error) {
        put(googleSignInFailure())
    }
}


export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}

export default userSagas;