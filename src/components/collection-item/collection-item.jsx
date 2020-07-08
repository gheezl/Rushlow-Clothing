import React, { Fragment } from "react"
import "./collection-item.scss"

import CustomButton from "../custom-button/custom-button.jsx"


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

                    <span className="name" > {name} </span>
                    <span className="price" > ${price} </span>
                </div>
                <CustomButton inverted >ADD TO CART </CustomButton>
            </div >
        </Fragment >
    )
}


export default CollectionItem;