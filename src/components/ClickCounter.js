import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    //destructuring properties.The count and incrementCount sent as parameters with OriginalComponent tag
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}
//Updated component accepts a component.Here ClickCounter is input component
//Here the Original component is ClickCounter
export default withCounter(ClickCounter, 6);
