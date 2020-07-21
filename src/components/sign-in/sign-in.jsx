import React, { Fragment, useState } from "react"
import { connect } from "react-redux"

import FormInput from "../form-input/form-input.jsx"
import CustomButton from "../custom-button/custom-button.jsx"

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions.js"


import "./sign-in.scss"


const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        Email: '',
        password: ''
    })

    const { email, password } = userCredentials
    const handleSubmit = async (event) => {
        event.preventDefault()
        emailSignInStart(email, password)
    }


    const handleChange = (event) => {
        const { value, id } = event.target
        setCredentials({ ...userCredentials, [id]: value })
    }



    return (
        <Fragment>
            <div className="sign-in">
                <h2> I already have an account</h2>
                <p>Sign in with your email and password</p>

                <form onSubmit={handleSubmit} >
                    <FormInput
                        id="email"
                        name="Email"
                        value={email}
                        required
                        onChange={handleChange}
                    />
                    <FormInput
                        id="password"
                        name="Password"
                        type="password"
                        value={password}
                        required
                        onChange={handleChange}
                    />
                    <div className="button" >
                        <CustomButton type="submit" > Sign In </CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})


export default connect(null, mapDispatchToProps)(SignIn);