import React, { Fragment } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CollectionPreview from "../collection-preview/collection-preview.jsx"

import selectCollectionsForPreview from "../../redux/shop/selectors/for-preview.selector.js"

import "./collections-overview.scss"

const CollectionsOverview = (collections) => {
    return (
        <Fragment>
            <div className="collections-overview" >
                {
                    collections.collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview
                            key={id}
                            {...otherCollectionProps}
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}


// 



const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);