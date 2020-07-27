import React, { useEffect, Fragment, lazy, Suspense } from 'react';
import { connect } from "react-redux"
import { Route } from "react-router-dom";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions.js"
import Spinner from '../../components/spinner/spinner.jsx';

const CollectionsOverviewContainer = lazy(() => import("../../components/collections-overview/collections-overview.container.jsx"))
const CollectionsPageContainer = lazy(() => import("../../pages/collection/collection.container.jsx"))



const Shop = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])


    return (
        <Fragment>
            <div className="shop-page" >
                <Suspense fallback={<Spinner />}>
                    <Route
                        exact
                        path={`${match.path}`}
                        component={CollectionsOverviewContainer}
                    />
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <Route
                        exact
                        path={`${match.path}/:categoryId`}
                        component={CollectionsPageContainer}
                    />
                </Suspense>
            </div>
        </Fragment>
    )

}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop);