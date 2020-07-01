import React, { Fragment } from 'react';
import "./collection-preview.sass"


const CollectionPreview = ({ title, items }) => {
    return (
        <Fragment>
            <div className="collection-preview">
                <h1>{title.toUpperCase()}</h1>
                <div className="preview" >
                    {
                        items.filter((item, idx) => idx < 4).map(item => (
                            <div key={item.id} >{item.name}</div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default CollectionPreview;