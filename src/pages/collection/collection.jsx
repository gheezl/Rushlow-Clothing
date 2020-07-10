import React, { Fragment } from "react"
import { connect } from "react-redux"

import selectCollection from "../../redux/shop/selectors/collection.selector.js"

import "./collection.scss"

const CollectionPage = ({ match }) => {
    console.log("collection", match)
    return (
        <Fragment>
            <div className="collection-page">
                <h1>Category page</h1>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CollectionPage);