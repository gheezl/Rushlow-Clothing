import React, { Fragment } from 'react';
import "./custom-button.scss"


const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    return (
        <Fragment>
            <button className={`${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
                {children}
            </button>
        </Fragment>
    )
}


export default CustomButton;