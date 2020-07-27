import React, { useEffect, Fragment, lazy } from 'react';
import { connect } from "react-redux"
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container.jsx"
import CollectionsPageContainer from "../../pages/collection/collection.container.jsx"

import { fetchCollectionsStart } from "../../redux/shop/shop.actions.js"



const Shop = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])


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

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop);