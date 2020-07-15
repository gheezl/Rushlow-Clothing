import ShopActionsTypes from "./shop.types.js"

const updateCollections = (collectionsMap) => ({
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})

export default updateCollections;