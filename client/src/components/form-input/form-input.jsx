import React, { Fragment } from "react"

import "./form-input.scss"

const FormInput = ({ onChange, ...otherProps }) => {
    return (
        <Fragment>
            <div>
                <input id={otherProps.id} type={otherProps.type} placeholder={otherProps.name} className="form-input" onChange={onChange} />
            </div>
        </Fragment>
    )
}

export default FormInput;