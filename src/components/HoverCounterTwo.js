import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    //desctructing
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>{count} times hover</h2>
      </div>
    );
  }
}

export default HoverCounterTwo;
