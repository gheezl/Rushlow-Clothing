import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { compose } from "redux";

import WithSpinner from "../../components/spinner/with-spinner.jsx"
import selectIsCollectionFetching from "../../redux/shop/selectors/selectIsCollectionFetching.selector.js"
import CollectionsPage from "./collection.jsx"
import WithFooter from "../../components/footer/withFooter.jsx"

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionsPage)

export default CollectionsPageContainer;