import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import FragmentDemoApproach2 from "./components/FragmentDemoApproach2";

class App extends Component {
  render() {
    return <div className='App'>{<FragmentDemoApproach2 />}</div>;
  }
}

export default App;
