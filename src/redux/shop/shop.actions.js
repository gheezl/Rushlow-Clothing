import ShopActionsTypes from "./shop.types.js"

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.js"


const fetchCollectionsStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START,
})


export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})


export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})


export const fecthCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections")
        dispatch(fetchCollectionsStart)

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot.docs)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}

export default fetchCollectionsStart;