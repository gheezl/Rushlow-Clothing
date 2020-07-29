import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom"
import "./menu-item.scss"

const MenuItem = ({ title, image, size, history, linkUrl }) => {
    return (
        <Fragment>
            <div
                onClick={() => history.push(`${linkUrl}`)}
                className={`${size} menu-item`}
                style={{
                    backgroundImage: `url(${image})`
                }}
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
        </Fragment>
    )
}

export default withRouter(MenuItem);