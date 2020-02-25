import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={isLoggedIn => (isLoggedIn ? "raj" : "Guest")} />
      </div>
    );
  }
}

export default App;
