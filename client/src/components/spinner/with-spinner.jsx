import React from "react"

import Spinner from "./spinner.jsx"


const WithSpinner = (WrappedComponent) => {
    const completeSpinner = ({ isLoading, ...otherProps }) => {
        return isLoading
            ?
            (
                <Spinner />
            )
            :
            (
                <WrappedComponent {...otherProps} />
            )
    }
    return completeSpinner
}



export default WithSpinner;