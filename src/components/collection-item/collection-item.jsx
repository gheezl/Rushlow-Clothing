import React, { Fragment } from "react"
import "./collection-item.scss"


const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <Fragment>
            <div className="collection-item">
                <div
                    className="image"
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <div className="collection-footer" >

                    <p className="name" > {name} </p>
                    <p className="price" > ${price} </p>
                </div>
            </div >
        </Fragment >
    )
}


export default CollectionItem;