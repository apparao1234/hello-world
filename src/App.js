import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Greet from "./components/Greet";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet name='Ram' heroName='Rama'>
          <p>This is children props</p>
        </Greet>
        <Greet name='Hanu' heroName='Hanumonth'>
          <button>Action</button>
        </Greet>
        <Greet name='Arujn' heroName='Krishna' />
      </div>
    );
  }
}

export default App;
