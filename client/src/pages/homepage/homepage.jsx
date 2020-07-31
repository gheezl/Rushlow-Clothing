import React, { Fragment, useEffect, Component } from 'react';
import Directory from "../../components/directory/directory.jsx"

import WithFooter from "../../components/footer/withFooter.jsx"

import "./homepage.scss"

const HomePage = () => {
    return (
        <Fragment>
            <div className="homepage">
                <h1 className="name" >CRWN CLOTHING</h1>
                <Directory />
            </div>
        </Fragment>
    )
}




export default WithFooter(HomePage);