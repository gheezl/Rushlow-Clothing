import { createSelector } from "reselect"

const selectShop = state => state.shop.collections

const selectCollectionsForPreview = createSelector(
    [selectShop],
    shop => shop.map(key => shop[key])
)

export default selectCollectionsForPreview;