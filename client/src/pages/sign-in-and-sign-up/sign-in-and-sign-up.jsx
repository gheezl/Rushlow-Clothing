import React, { Fragment } from "react";
import "./sign-in-and-sign-up.scss"

import SignIn from "../../components/sign-in/sign-in.jsx"
import SignUp from "../../components/sign-up/sign-up.jsx"


const SignInAndSignUpPage = () => {
    return (
        <Fragment>
            <div className="sign-in-and-sign-up" >
                <SignIn />
                <SignUp />
            </div>
        </Fragment>
    )
}

export default SignInAndSignUpPage;