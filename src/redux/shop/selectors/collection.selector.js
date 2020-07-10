import { createSelector } from "reselect"

import selectShopCollections from "./shop.selector.js"

const selectCollection = (collectionUrlParam) =>
    createSelector(
        [selectShopCollections],
        shop => shop[collectionUrlParam]
    )


export default selectCollection;