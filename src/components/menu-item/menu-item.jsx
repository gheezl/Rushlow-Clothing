import React, { Fragment } from 'react';
import "./menu-item.scss"


const MenuItem = ({ title, image }) => {
    <Fragment>
        <div className="menu-item">
            <div className="content">
                <h1 className="title">
                    {title}
                </h1>
                <span className="subtitle" >
                    Shop Now
                </span>
            </div>
        </div>
    </Fragment>
}

export default MenuItem;