import React, { Fragment } from "react"

import Footer from "./footer.jsx"


const WithFooter = (WrappedComponent) => {
    const completeFooter = () => {
        return (
            <Fragment>
                <WrappedComponent />
                <Footer />
            </Fragment>
        )
    }
    return completeFooter
}

export default WithFooter;