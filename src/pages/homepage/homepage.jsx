import React, { Fragment } from 'react';
import "./homepage.scss"
import Directory from "../../components/directory/directory.jsx"


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



export default HomePage;