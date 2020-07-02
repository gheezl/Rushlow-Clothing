import React, { Component, Fragment } from "react"
import "./sign-in.scss"


class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }
    }


    render() {
        return (
            <Fragment>
                <div className="sign-in">
                    <h2> I already have an account</h2>
                    <span>Sign in with your email and password</span>

                    <from>
                        <input name="email" value={this.state.email} required />
                        <label>Email</label>
                        <input name="password" type="password" value={this.state.password} />
                        <label>Password</label>

                        <input type="submit" />
                    </from>
                </div>
            </Fragment>
        )
    }
}


export default SignIn;