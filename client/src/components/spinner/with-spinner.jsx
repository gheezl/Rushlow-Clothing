import React from "react"

import "./with-spinner.scss"

import Spinner from "./spinner.jsx"


const WithSpinner = (WrappedComponent) => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <Spinner />
        ) : (
                <WrappedComponent {...otherProps} />
            )
    }
    return Spinner
}



export default WithSpinner;