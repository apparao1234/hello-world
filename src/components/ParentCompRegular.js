import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentCompRegular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "raj"
    };
  }
  componentDidMount() {
    //first parameter is arrow function. 2nd parameter is reset time to render 2 seconds
    setInterval(() => {
      this.setState({
        name: "raj"
      });
    }, 2000);
  }

  render() {
    console.log("******ParentComp Render *******************");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentCompRegular;
