import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name} and {this.props.heroName}
      </div>
    );
  }
}

export default Welcome;
