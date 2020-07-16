import React, { Fragment } from 'react';
import CollectionItem from "../collection-item/collection-item.jsx"
import "./collection-preview.scss"


const CollectionPreview = ({ title, items }) => {
    return (
        <Fragment>
            <div className="collection-preview">
                <h1 className='title'>{title.toUpperCase()}</h1>
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

export default CollectionPreview;