import { all, call } from "redux-saga/effects"

import { fetchCollectionsStart } from "./shop/saga/shop.sagas.js"
import userSagas from "./user/user-saga.js"


function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas)
    ])
}

export default rootSaga;