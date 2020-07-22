import { persistStore } from "redux-persist"
import store from "./store.js"

const persistor = persistStore(store);

export default persistor;