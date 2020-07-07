import React, { Component, Fragment } from 'react';

import FormInput from "../form-input/form-input.jsx"
import CustomButton from "../custom-button/custom-button.jsx"

import { auth, createUserProfileDocument } from "../../firebase/firebase.js"

import "./sign-up.scss"



class SignUp extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, Email, Password, ConfirmPassword } = this.state

        if (Password !== ConfirmPassword) {
            alert("Your passwords do not match. Please try again.")
            return
        }
        else {
            try {
                const { user } = await auth.createUserWithEmailAndPassword(
                    Email,
                    Password,
                )

                console.log(user)

                await createUserProfileDocument(user, { displayName })

                this.setState({

                })
            }
            catch (error) {
                alert(error.message)
            }
        }
    }

    handleChange = (event) => {
        const { id, value } = event.target;

        this.setState({ [id]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <Fragment>
                <div className="sign-up">
                    <h2 className="title" >I do not have an account</h2>

                    <form className="sign-up-form" onSubmit={this.handleSubmit} >
                        <FormInput
                            id="displayName"
                            type="text"
                            name="Display Name"
                            value={displayName}
                            onChange={this.handleChange}
                            required
                        />

                        <FormInput
                            id="Email"
                            type="email"
                            name="Email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />

                        <FormInput
                            id="Password"
                            type="password"
                            name="Password"
                            value={password}
                            onChange={this.handleChange}
                            required
                        />

                        <FormInput
                            id="ConfirmPassword"
                            type="password"
                            name="Confirm Password"
                            value={confirmPassword}
                            onChange={this.handleChange}
                            required
                        />

                        <CustomButton type="submit">SIGN UP</CustomButton>

                    </form>
                </div>
            </Fragment>
        )
    }
}

export default SignUp