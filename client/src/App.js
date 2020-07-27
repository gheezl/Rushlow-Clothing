import React, { useEffect, Fragment, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

import './App.scss';

import Spinner from "./components/spinner/spinner.jsx"
import ErrorBoundary from "./components/error-boundary/error-boundary.jsx"

import selectHidden from "./redux/footer/selectors/footer-hidden.selector.js"
import selectCurrentUser from "./redux/user/user.selectors"

import { checkUserSession } from "./redux/user/user.actions.js"

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const Shop = lazy(() => import("./pages/shop/shop.jsx"))
const Header = lazy(() => import("./components/header/header.jsx"))
const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx"))
const CheckOut = lazy(() => import("./pages/checkout/checkout.jsx"))
const Footer = lazy(() => import("./components/footer/footer.jsx"))




const App = ({ checkUserSession, currentUser, footerHidden }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  return (
    <Fragment>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />} >
          <Header />
        </Suspense>
      </ErrorBoundary>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />} >
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
            <Route exact path="/checkout" component={CheckOut} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
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