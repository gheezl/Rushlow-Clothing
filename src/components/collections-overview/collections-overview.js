import React, { Fragment } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CollectionPreview from "../collection-preview/collection-preview.jsx"

import selectShopCollections from "../../redux/shop/selectors/shop.selector.js"

import "./collections-overview.scss"

const CollectionsOverview = (collections) => {
    return (
        <Fragment>
            <div className="collections-overview" >
                {
                    collections.collections.collections.map(({ id, ...otherCollectionProps }) => (
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

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview);