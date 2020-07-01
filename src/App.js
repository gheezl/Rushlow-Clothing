import React, { Component, Fragment } from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.jsx"
import { Route, Switch, Link } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        Hats
    </h1>
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </Fragment>
    )
  }
}

export default App;