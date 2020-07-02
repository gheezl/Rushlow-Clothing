import React, { Component, Fragment } from "react"

import FormInput from "../form-input/form-input.jsx"

import "./sign-in.scss"


class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
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
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <Fragment>
                <div className="sign-in">
                    <h2> I already have an account</h2>
                    <p>Sign in with your email and password</p>

                    <from onSubmit={this.handleSubmit} >
                        <FormInput
                            name="email"
                            value={this.state.email}
                            required
                            handleChange={this.handleChange}
                        />
                        <FormInput
                            name="password"
                            type="password"
                            value={this.state.password}
                            required
                            handleChange={this.handleChange}
                        />
                        <input type="submit" />
                    </from>
                </div>
            </Fragment >
        )
    }
}


export default SignIn;