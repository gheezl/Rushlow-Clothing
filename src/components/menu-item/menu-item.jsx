import React, { Fragment } from 'react';
import "./menu-item.scss"


const MenuItem = ({ title, image, size }) => (
    <Fragment>
        <div
            className={`${size} menu-item`}
            style={{
                backgroundImage: `url(${image})`
            }}>
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