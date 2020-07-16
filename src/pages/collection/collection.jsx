import React, { Fragment } from "react"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

import selectCollection from "../../redux/shop/selectors/collection.selector.js"

import CollectionItem from "../../components/collection-item/collection-item.jsx"
import selectShopCollections from "../../redux/shop/selectors/shop.selector.js"

import "./collection.scss"

const CollectionPage = ({ collection }) => {
    console.log(collection)
    const { title, items } = collection
    return (
        <Fragment>
            <div className="collection-page">
                <h2 className="title">{title}</h2>
                <div className="items">
                    {
                        items.map(item => <CollectionItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})

// const mapStateToProps = createStructuredSelector({
//     collection: selectShopCollections
// })

export default connect(mapStateToProps)(CollectionPage);