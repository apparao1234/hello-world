import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import Counter from "./components/Counter";
//render is not any keyword. Assiging a reference of arrow function with two parameters to render.
//The below code shows that Common function of Counter is shared to CLickCountTwo and HoverCounterTow components.

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
      </div>
    );
  }
}

export default App;
