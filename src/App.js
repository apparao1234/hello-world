import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
// import Counter from "./components/Counter";
//render is not any keyword. Assiging a reference of arrow function with two parameters to render.
//The below code shows that Common function of Counter is shared to CLickCountTwo and HoverCounterTow components.

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ClickCounter name='raj' />
        <HoverCounter name='raj' />

        {/* <Counter>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <Counter>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter> */}
      </div>
    );
  }
}

export default App;
