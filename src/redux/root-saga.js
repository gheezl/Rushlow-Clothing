import { all, call } from "redux-saga/effects"

import { fetchCollectionsStart } from "./shop/saga/shop.sagas.js"


function* rootSaga() {
    yield all([
        call(fetchCollectionsStart)
    ])
}

export default rootSaga;