import React, { Fragment, Component } from 'react';
import { connect } from "react-redux"
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.js"
import CollectionPage from "../collection/collection.jsx"
import WithSpinner from "../../components/spinner/with-spinner.jsx"

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.js"

import updateCollections from "../../redux/shop/shop.actions.js"





const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

class Shop extends Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection("collections")

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot.docs)
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <Fragment>
                <div className="shop-page" >
                    <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                    <Route exact path={`${match.path}/:categoryId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />} />
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);