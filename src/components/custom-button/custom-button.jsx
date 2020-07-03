import React, { Fragment } from 'react';
import "./custom-button.scss"


const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <Fragment>
            <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
                {children}
            </button>
        </Fragment>
    )
}


export default CustomButton;