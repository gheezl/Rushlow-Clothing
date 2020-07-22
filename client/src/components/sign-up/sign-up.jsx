import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.jsx"
import CustomButton from "../custom-button/custom-button.jsx"

import { SignUpStart } from "../../redux/user/user.actions.js"

import "./sign-up.scss"




const SignUp = ({ SignUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    })

    const { displayName, Email, Password, ConfirmPassword } = userCredentials

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            alert("Your passwords do not match. Please try again.")
            return
        }
        else {
            SignUpStart(displayName, Email, Password)
        }
    }

    const handleChange = (event) => {
        const { id, value } = event.target;

        console.log(userCredentials)

        setCredentials({ ...userCredentials, [id]: value })
    }



    return (
        <Fragment>
            <div className="sign-up">
                <h2 className="title" >I do not have an account</h2>

                <form className="sign-up-form" onSubmit={handleSubmit} >
                    <FormInput
                        id="displayName"
                        type="text"
                        name="Display Name"
                        value={displayName}
                        onChange={handleChange}
                        required
                    />

                    <FormInput
                        id="Email"
                        type="email"
                        name="Email"
                        value={Email}
                        onChange={handleChange}
                        required
                    />

                    <FormInput
                        id="Password"
                        type="password"
                        name="Password"
                        value={Password}
                        onChange={handleChange}
                        required
                    />

                    <FormInput
                        id="ConfirmPassword"
                        type="password"
                        name="Confirm Password"
                        value={ConfirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        </Fragment>
    )

}

const mapDispatchToProps = (dispatch) => ({
    SignUpStart: (displayName, Email, Password) => dispatch(SignUpStart(
        {
            displayName, Email, Password
        }
    ))
})

export default connect(null, mapDispatchToProps)(SignUp)