import { all, call } from "redux-saga/effects"

import shopSagas from "./shop/saga/shop.sagas.js"
import userSagas from "./user/user-saga.js"
import cartSagas from "./cart/cart-saga.js"


function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}

export default rootSaga;