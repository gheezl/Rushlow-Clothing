import React, { useEffect, Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect"
import { connect, useDispatch } from "react-redux"


import './App.css';

import HomePage from "./pages/homepage/homepage.jsx";
import Shop from "./pages/shop/shop.jsx";
import Header from "./components/header/header.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx";
import CheckOut from "./pages/checkout/checkout.jsx"
import Footer from "./components/footer/footer.jsx"
import selectHidden from "./redux/footer/selectors/footer-hidden.selector.js"

import selectCurrentUser from "./redux/user/user.selectors"

import { checkUserSession } from "./redux/user/user.actions.js"


const App = ({ checkUserSession, currentUser, footerHidden }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
        <Route exact path="/checkout" component={CheckOut} />
      </Switch>
      {
        footerHidden
          ? null
          : <Footer />
      }
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  footerHidden: selectHidden,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);