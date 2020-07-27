import React, { Component, Fragment } from "react"

import "./error-boundary.scss"


const ErrorBoundaryContainer = () => {
    return (
        <Fragment>
            <div className="error-image-overlay">
                <img src="https://i.imgur.com/g3hgqe8.png" className="error-image-container" />
                <div className="error-image-text" >
                    Sorry this page is broken
                </div>
            </div>
        </Fragment>
    )
}

export default ErrorBoundaryContainer;