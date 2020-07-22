import { createSelector } from "reselect"

const selectFooter = state => state.footer

const selectHidden = createSelector(
    [selectFooter],
    (footer) => footer.hidden
)

export default selectHidden;