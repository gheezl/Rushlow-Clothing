import React, { Fragment } from 'react';
import "./menu-item.scss"


const MenuItem = ({ title, image, size }) => (
    <Fragment>
        <div
            style={{
                backgroundImage: `url(${image})`
            }}
            className={`${size} menu-item`}
        >
            <div className="content">
                <h1 className="title">
                    {title.toUpperCase()}
                </h1>
                <span className="subtitle" >
                    Shop Now
                </span>
            </div>
        </div>
    </Fragment >
)

export default MenuItem;