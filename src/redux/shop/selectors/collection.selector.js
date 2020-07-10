import { createSelector } from "reselect"

import selectShopCollections from "./shop.selector.js"

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectCollection = (collectionUrlParam) =>
    createSelector(
        [selectShopCollections],
        shop => shop.collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )


export default selectCollection;