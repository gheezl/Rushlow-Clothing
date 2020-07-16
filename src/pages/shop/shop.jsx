import React, { Fragment, Component } from 'react';
import { connect } from "react-redux"
import { Route } from "react-router-dom";

import { createStructuredSelector } from "reselect"
import selectIsCollectionFetching from "../../redux/shop/selectors/selectIsCollectionFetching.selector.js"

import CollectionsOverview from "../../components/collections-overview/collections-overview.js"
import CollectionPage from "../collection/collection.jsx"
import WithSpinner from "../../components/spinner/with-spinner.jsx"

import fetchCollectionsStartAsync from "../../redux/shop/shop.actions.js"

import updateCollections from "../../redux/shop/shop.actions.js"
import fetchCollectionsStart from '../../redux/shop/shop.actions.js';





const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

class Shop extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync()
    }

    render() {
        const { match, isCollectionFetching } = this.props
        return (
            <Fragment>
                <div className="shop-page" >
                    <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                    <Route exact path={`${match.path}/:categoryId`} render={(props) => <CollectionsPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);