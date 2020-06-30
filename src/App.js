import React, { Component, Fragment } from 'react';
import './App.css';
import HomePage from "./components/homepage/homepage.jsx"

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <Fragment>
        <HomePage />
      </Fragment>
    )
  }
}

export default App;