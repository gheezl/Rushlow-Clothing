import React, { Component, Fragment } from 'react';

import FormInput from "../form-input/form-input.jsx"
import CustomButton from "../custom-button/custom-button.jsx"

import { auth, createUserProfileDocument } from "../../firebase/firebase.js"

import "./sign-up.scss"



class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            )

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <Fragment>
                <div className="sign-up">
                    <h2 className="title" >I do not have an account</h2>

                    <form className="sign-up-form" onSubmit={this.handleSubmit} >
                        <FormInput
                            type="text"
                            name="displayname"
                            value={displayName}
                            onChange={this.handleChange}
                            required
                        />

                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />

                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            required
                        />

                        <FormInput
                            type="password"
                            name="confirmPassword"
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