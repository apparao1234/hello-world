import React, { Component } from "react";

class HoverCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>
          {" "}
          {this.state.count} times hover{" "}
        </h2>
      </div>
    );
  }
}

export default HoverCounterTwo;
