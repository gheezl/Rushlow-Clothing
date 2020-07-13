import React, { Fragment, Component } from 'react';
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.js"

import CollectionPage from "../collection/collection.jsx"

const Shop = ({ match }) => {
    console.log(match)
    return (
        <Fragment>
            <div className="shop-page" >
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route exact path={`${match.path}/:categoryId`} component={CollectionPage} />
            </div>
        </Fragment>
    )
}

export default Shop;