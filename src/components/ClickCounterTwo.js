import React, { Component } from "react";

class ClickCounterTwo extends Component {
  render() {
    //desctructing
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>{count} time clicked</button>
      </div>
    );
  }
}

export default ClickCounterTwo;
