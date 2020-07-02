import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import "./header.scss";


const Header = () => {
    return (
        <Fragment>
            <div className="header" >
                <Link className="logo-container" to="/">
                    <img className="logo" src="file:///C:/Users/Jacob%20Rushlow/Pictures/web%20development%20files/crown.svg" />
                </Link>
                <div className="options" >
                    <Link className="option" to="/shop" >
                        SHOP
                    </Link>
                    <Link className="option" to="/" >
                        CONTACT
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;