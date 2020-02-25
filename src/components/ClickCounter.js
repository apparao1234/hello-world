import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  // As set state method required prev state, we must pass function  with previous state and increase the count
  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}> Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounter;
