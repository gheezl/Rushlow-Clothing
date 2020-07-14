import { createSelector } from "reselect"

const selectShop = state => state.shop

const selectShopCollections = createSelector(
    [selectShop],
    shop => shop
)

export default selectShopCollections;