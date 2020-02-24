import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "raj"
    };
    console.log("LifeCycleA constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "codeVolution"
    });
  };
  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div> LifeCycleA </div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
