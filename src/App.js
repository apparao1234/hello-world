import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { UserProvider } from "./components/userContext";
import ComponentC from "./components/ComponentC";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserProvider value='karunya'>
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
