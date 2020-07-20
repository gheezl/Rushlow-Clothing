import { takeLatest, put, all, call } from "redux-saga/effects"

import UserActionTypes from "./user.types.js"

import { auth, createUserProfileDocument, googleProvider, getCurrentUser } from "../../firebase/firebase.js"

import { SignInSuccess, SignInFailure, SignOutSuccess, SignOutFailure, SignUpSuccess, SignUpFailure } from "../user/user.actions.js"

// Saga functions

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

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    }
    catch (error) {
        console.log(error)
    }
}

export function* signOutOfAccount() {
    try {
        yield auth.signOut()
        yield put(SignOutSuccess())
    }
    catch (error) {
        put(SignOutFailure(error))
    }
}

export function* signUp({ payload: { displayName, Email, Password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            Email,
            Password,
        )

        yield createUserProfileDocument(user, { displayName })
        yield isUserAuthenticated()
        yield put(SignUpSuccess())
    }
    catch (error) {
        yield put(SignUpFailure(error))
    }
}

// listensers

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutOfAccount)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

// Final saga

function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ])
}

export default userSagas;