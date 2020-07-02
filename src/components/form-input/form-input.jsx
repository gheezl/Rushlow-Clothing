import React, { Fragment } from "react"

import "./form-input.scss"

const FormInput = ({ handleChange, ...otherProps }) => {
    return (
        <Fragment>
            <div>
                <input placeholder={otherProps.name} className="form-input" onChange={handleChange} {...otherProps} />
            </div>
        </Fragment>
    )
}

export default FormInput;