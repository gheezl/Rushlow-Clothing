import React, { Fragment, Component } from 'react';
import CollectionPreview from "../../components/preview-collection/collection-preview.jsx"
import SHOP_DATA from "./shop-data.jsx"


class Shop extends Component {
    constructor() {
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <Fragment>
                <div className="shop-page" >
                    {
                        collections.map(({ id, ...otherCollectionProps }) => (
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
}

export default Shop;