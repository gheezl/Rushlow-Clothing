import React, { Fragment } from "react"
import { connect } from "react-redux"
import { addItem } from "../../redux/cart/cart.actions/addItem.js"

import "./collection-item.scss"

import CustomButton from "../custom-button/custom-button.jsx"


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
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
                <CustomButton onClick={() => addItem(item)} inverted >ADD TO CART </CustomButton>
            </div >
        </Fragment >
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);