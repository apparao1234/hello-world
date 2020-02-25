import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounter extends Component {
  render() {
    //destructuring properties.The count and incrementCount sent as parameters with OriginalComponent tag
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}> Clicked {count} times</button>
      </div>
    );
  }
}
//Updated component accepts a component.Here ClickCounter is input component
//Here the Original component is ClickCounter
export default UpdatedComponent(ClickCounter);
