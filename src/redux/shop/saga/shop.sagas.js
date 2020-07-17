import { takeEvery, takeLatest, call, put } from "redux-saga/effects"

import ShopActionsTypes from "../shop.types.js"

import { firestore, convertCollectionsSnapshotToMap } from "../../../firebase/firebase.js"

import { fetchCollectionsSuccess, fetchCollectionsFailure } from "../shop.actions.js"


export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection("collections")
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot.docs)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }

}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionsTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}