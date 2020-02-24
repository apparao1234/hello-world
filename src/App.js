import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import LifeCycleA from "./components/LifeCycleA";

class App extends Component {
  render() {
    return <div className='App'>{<LifeCycleA />}</div>;
  }
}

export default App;
