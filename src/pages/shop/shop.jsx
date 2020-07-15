import React, { Fragment, Component } from 'react';
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.js"

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.js"

import CollectionPage from "../collection/collection.jsx"

class Shop extends Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection("collections")

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot.docs)
            console.log(collectionsMap)
        })
    }

    render() {
        const { match } = this.props
        return (
            <Fragment>
                <div className="shop-page" >
                    <Route exact path={`${match.path}`} component={CollectionsOverview} />
                    <Route exact path={`${match.path}/:categoryId`} component={CollectionPage} />
                </div>
            </Fragment>
        )
    }
}

export default Shop;