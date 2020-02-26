import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  //added for debugging
  constructor(props) {
    console.log("ClickCounter constructor() method");
    super(props);
  }
  //added for debugging
  componentDidMount() {
    console.log("ClickCounter componentDidMount");
  }

  render() {
    //destructuring properties.The count and incrementCount sent as parameters with OriginalComponent tag
    console.log("ClickCounter render() method");
    const { count, incrementCount } = this.props;
    console.log("ClickCounter Count value" + count);
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
