import React, { Fragment } from 'react';
import "./custom-button.scss"


const CustomButton = ({ children, ...otherProps }) => {
    return (
        <Fragment>
            <button className="custom-button" {...otherProps}>
                {children}
            </button>
        </Fragment>
    )
}


export default CustomButton;