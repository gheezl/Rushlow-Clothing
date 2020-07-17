import React, { Component, Fragment } from "react"
import { connect } from "react-redux"

import FormInput from "../form-input/form-input.jsx"
import CustomButton from "../custom-button/custom-button.jsx"

import { auth, signInWithGoogle } from "../../firebase/firebase.js"
import { googleSignInStart } from "../../redux/user/user.actions.js"


import "./sign-in.scss"


class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            Email: "",
            Password: ""
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault()

        const { Email, Password } = this.state

        try {
            await auth.signInWithEmailAndPassword(Email, Password);
            this.setState({
                Email: "",
                Password: ""
            })
        }
        catch (error) {
            alert(error.message)
        }
    }


    handleChange = (event) => {
        const { value, id } = event.target

        this.setState({ [id]: value })
    }


    render() {
        const { googleSignInStart } = this.props;
        return (
            <Fragment>
                <div className="sign-in">
                    <h2> I already have an account</h2>
                    <p>Sign in with your email and password</p>

                    <form onSubmit={this.handleSubmit} >
                        <FormInput
                            id="Email"
                            name="Email"
                            value={this.state.email}
                            required
                            onChange={this.handleChange}
                        />
                        <FormInput
                            id="Password"
                            name="Password"
                            type="password"
                            value={this.state.password}
                            required
                            onChange={this.handleChange}
                        />
                        <div className="button" >
                            <CustomButton type="submit" > Sign In </CustomButton>
                            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign In With Google </CustomButton>
                        </div>
                    </form>
                </div>
            </Fragment >
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart)
})


export default connect(null, mapDispatchToProps)(SignIn);