import { createSelector } from "reselect"

const selectShop = state => state.shop.state

const selectCollectionsForPreview = createSelector(
    [selectShop],
    shop => Object.keys(shop).map(key => shop[key])
)

export default selectCollectionsForPreview;