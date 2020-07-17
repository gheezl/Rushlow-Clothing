import React, { Fragment, Component } from 'react';
import { connect } from "react-redux"
import { Route } from "react-router-dom";

import { createStructuredSelector } from "reselect"
import selectIsCollectionFetching from "../../redux/shop/selectors/selectIsCollectionFetching.selector.js"

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container.jsx"
import CollectionsPageContainer from "../../pages/collection/collection.container.jsx"

import { fetchCollectionsStart } from "../../redux/shop/shop.actions.js"



class Shop extends Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props
        fetchCollectionsStart()
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
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);