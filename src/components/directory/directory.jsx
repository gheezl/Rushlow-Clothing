import React, { Fragment } from 'react';
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect";

import "./directory.scss"

import MenuItem from "../menu-item/menu-item.jsx"
import selectDirectorySection from "../../redux/directory/selectors/directory.selector.js"

const Directory = ({ sections }) => {
    return (
        <Fragment>
            <div className="directory-menu">
                {sections.map(section => (
                    <MenuItem
                        image={section.imageUrl}
                        title={section.title}
                        id={section.id}
                        size={section.size}
                        linkUrl={section.linkUrl}
                    />
                ))}
            </div>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})


export default connect(mapStateToProps)(Directory);