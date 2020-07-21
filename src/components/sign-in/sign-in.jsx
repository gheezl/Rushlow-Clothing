import React, { Fragment, useState, useCallback } from "react"
import { useDispatch } from "react-redux"

import FormInput from "../form-input/form-input.jsx"
import CustomButton from "../custom-button/custom-button.jsx"


import UserActionTypes from "../../redux/user/user.types.js"


import "./sign-in.scss"


const SignIn = () => {
    const [userCredentials, setCredentials] = useState({
        Email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const googleSignIn = useCallback(
        () => dispatch({
            type: UserActionTypes.GOOGLE_SIGN_IN_START
        })
    )
    const emailSignIn = useCallback(
        (emailAndPassword) => dispatch({
            type: UserActionTypes.EMAIL_SIGN_IN_START,
            payload: emailAndPassword
        })
    )

    const { email, password } = userCredentials
    const handleSubmit = async (event) => {
        event.preventDefault()
        emailSignIn({ email, password })
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
                        <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}


export default SignIn;