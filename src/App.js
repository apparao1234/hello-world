import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ParentComponentMemo from "./components/ParentComponentMemo";

class App extends Component {
  render() {
    return <div className='App'>{<ParentComponentMemo />}</div>;
  }
}

export default App;
