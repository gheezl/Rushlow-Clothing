import { createSelector } from "reselect"

const selectShop = state => state.shop

const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export default selectIsCollectionFetching;