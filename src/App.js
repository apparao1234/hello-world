import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Welcome name='Ram' heroName='Rama' />

        <Welcome name='Hanu' heroName='Hanumonth'></Welcome>
        <Welcome name='Arujn' heroName='Krishna' />
      </div>
    );
  }
}

export default App;
