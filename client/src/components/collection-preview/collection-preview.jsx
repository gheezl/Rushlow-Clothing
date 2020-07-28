import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom"
import CollectionItem from "../collection-item/collection-item.jsx"

import "./collection-preview.scss"


const CollectionPreview = ({ title, items, history }) => {
    return (
        <Fragment>
            <div className="collection-preview">
                <h1 onClick={() => history.push(`/shop/${title.toLowerCase()}`)} className='title'>{title.toUpperCase()}</h1>
                <div className='preview'>
                    {items
                        .filter((item, idx) => idx < 4)
                        .map(item => (
                            <CollectionItem key={item.id} item={item} />
                        ))}
                </div>
            </div>
        </Fragment>
    )
}



export default withRouter(CollectionPreview);