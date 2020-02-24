import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ParentCompRegular from "./components/ParentCompRegular";

class App extends Component {
  render() {
    return <div className='App'>{<ParentCompRegular />}</div>;
  }
}

export default App;
