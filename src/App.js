import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"


import './App.css';

import HomePage from "./pages/homepage/homepage.jsx";
import Shop from "./pages/shop/shop.jsx";
import Header from "./components/header/header.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx";
import CheckOut from "./pages/checkout/checkout.jsx"
import Footer from "./components/footer/footer.jsx"
import selectHidden from "./redux/footer/selectors/footer-hidden.selector.js"

import selectCurrentUser from "./redux/user/user.selectors"

import { googleSignInStart } from "./redux/user/user.actions.js"


class App extends Component {


  unsubscribeFromAuth = null


  componentDidMount() {


    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       })
    //     });
    //   }
    //   else {
    //     setCurrentUser(userAuth)
    //   }
    // })
  }


  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
          <Route exact path="/checkout" component={CheckOut} />
        </Switch>
        {
          this.props.footerHidden
            ? null
            : <Footer />
        }
      </Fragment>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user)),
//   googleSignInStart: () => dispatch(googleSignInStart())
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  footerHidden: selectHidden,
})

export default connect(mapStateToProps)(App);