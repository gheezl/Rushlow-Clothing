import { createSelector } from "reselect"

import selectCollection from "./collection.selector.js"

const selectCollectionsForPreview = createSelector(
    [selectCollection],
    collections => Object.keys(collections).map(key => collections[key])
)

export default selectCollectionsForPreview;