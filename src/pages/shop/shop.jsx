import React, { Fragment, Component } from 'react';
import { connect } from "react-redux"
import { Route } from "react-router-dom";

import { createStructuredSelector } from "reselect"
import selectIsCollectionFetching from "../../redux/shop/selectors/selectIsCollectionFetching.selector.js"

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container.jsx"
import CollectionsPageContainer from "../../pages/collection/collection.container.jsx"

import fetchCollectionsStartAsync from "../../redux/shop/shop.actions.js"



class Shop extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync()
    }

    render() {
        const { match } = this.props
        return (
            <Fragment>
                <div className="shop-page" >
                    <Route
                        exact
                        path={`${match.path}`}
                        component={CollectionsOverviewContainer}
                    />
                    <Route
                        exact
                        path={`${match.path}/:categoryId`}
                        component={CollectionsPageContainer}
                    />
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