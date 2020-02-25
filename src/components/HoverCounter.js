import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    //destructuring properties
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hover {count} times</h2>
      </div>
    );
  }
}
//Updated component accepts a component.Here HoverCounter is input component
//Here the Original component is HoverCounter
export default withCounter(HoverCounter);
