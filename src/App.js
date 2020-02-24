import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import RefsDemo from "./components/RefsDemo";

class App extends Component {
  render() {
    return <div className='App'>{<RefsDemo />}</div>;
  }
}

export default App;
