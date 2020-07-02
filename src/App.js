import React, { Component, Fragment } from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.jsx";
import Shop from "./pages/shop/shop.jsx";
import Header from "./components/header/header.jsx"
import { Route, Switch, Link } from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Fragment>
    )
  }
}

export default App;