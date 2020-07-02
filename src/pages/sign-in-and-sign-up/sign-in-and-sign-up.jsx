import React, { Fragment } from "react";
import "./sign-in-and-sign-up.scss"

import SignIn from "../../components/sign-in/sign-in.jsx"


const SignInAndSignUpPage = () => {
    return (
        <Fragment>
            <div className="sign-in-and-sign-up" >
                <SignIn />
            </div>
        </Fragment>
    )
}

export default SignInAndSignUpPage;