import { takeLatest, put, all, call, take } from "redux-saga/effects"

import UserActionTypes from "./user.types.js"

import { auth, createUserProfileDocument, googleProvider } from "../../firebase/firebase.js"

import { SignInSuccess, SignInFailure } from "../user/user.actions.js"


export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(
            SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        )
    }
    catch (error) {
        put(SignInFailure())
    }
}


export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        put(SignInFailure())
    }
}


export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    }
    catch (error) {
        put(SignInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}


function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}

export default userSagas;