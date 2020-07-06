import React, { Component, Fragment } from "react"

import FormInput from "../form-input/form-input.jsx"
import CustomButton from "../custom-button/custom-button.jsx"

import { signInWithGoogle } from "../../firebase/firebase.js"

import "./sign-in.scss"


class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            Email: "",
            Password: ""
        }
    }


    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            email: "",
            password: ""
        })
    }


    handleChange = (event) => {
        const { value, placeholder } = event.target

        this.setState({ [placeholder]: value })
    }


    render() {
        return (
            <Fragment>
                <div className="sign-in">
                    <h2> I already have an account</h2>
                    <p>Sign in with your email and password</p>

                    <from onSubmit={this.handleSubmit} >
                        <FormInput
                            name="Email"
                            value={this.state.email}
                            required
                            onChange={this.handleChange}
                        />
                        <FormInput
                            name="Password"
                            type="password"
                            value={this.state.password}
                            required
                            onChange={this.handleChange}
                        />
                        <div className="button">
                            <CustomButton type="submit" > Sign In </CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                        </div>

                    </from>
                </div>
            </Fragment >
        )
    }
}


export default SignIn;