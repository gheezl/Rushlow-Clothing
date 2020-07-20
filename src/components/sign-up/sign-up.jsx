import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.jsx"
import CustomButton from "../custom-button/custom-button.jsx"

import { auth, createUserProfileDocument } from "../../firebase/firebase.js"

import { SignUpStart } from "../../redux/user/user.actions.js"

import "./sign-up.scss"




class SignUp extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { Password, ConfirmPassword } = this.state

        if (Password !== ConfirmPassword) {
            alert("Your passwords do not match. Please try again.")
            return
        }
        else {
            const { SignUpStart } = this.props;

            const { displayName, Email, Password } = this.state
            SignUpStart(displayName, Email, Password)
            this.setState({})
        }
    }

    handleChange = (event) => {
        const { id, value } = event.target;

        this.setState({ [id]: value })

        console.log(this.state)
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

const mapDispatchToProps = (dispatch) => ({
    SignUpStart: (displayName, Email, Password) => dispatch(SignUpStart(
        {
            displayName, Email, Password
        }
    ))
})

export default connect(null, mapDispatchToProps)(SignUp)