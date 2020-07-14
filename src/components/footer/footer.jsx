import React, { Fragment } from 'react';

import "./footer.scss"

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="links">
                    <a href="https://angel.co/u/jacob-rushlow"
                    >
                        <img src="angellist.png" className="angel-list-link" />
                    </a>
                    <a href="https://github.com/gheezl">
                        <img src="https://image.flaticon.com/icons/png/512/25/25231.png" className="github-link" />
                    </a>
                    <a href="https://www.linkedin.com/in/jacob-rushlow-224a581ab/">
                        <img src="linkedin.png" className="linkedin-link" />
                    </a>
                </div>
                <div className="made-with">
                    <span>Made with React and Redux</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;