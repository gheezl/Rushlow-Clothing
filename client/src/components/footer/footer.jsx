import React, { Fragment } from 'react';

import "./footer.scss"

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="links">
                    <a href="https://angel.co/u/jacob-rushlow"
                    >
                        <img alt="angellist" src="angellist.png" className="angel-list-link" />
                    </a>
                    <a href="https://github.com/gheezl">
                        <img alt="github" src="github.png" className="github-link" />
                    </a>
                    <a href="https://www.linkedin.com/in/jacob-rushlow-224a581ab/">
                        <img alt="linkedin" src="linkedin.png" className="linkedin-link" />
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