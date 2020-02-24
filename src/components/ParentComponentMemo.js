import React, { Component } from "react";

import MemoComponent from "./MemoComponent";

class ParentComponentMemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "raj Memo"
    };
  }
  componentDidMount() {
    //first parameter is arrow function. 2nd parameter is reset time to render 2 seconds
    setInterval(() => {
      this.setState({
        name: "raj Memo"
      });
    }, 2000);
  }

  render() {
    console.log("******ParentComp Render *******************");
    return (
      <div>
        Parent Component
        <MemoComponent name={this.state.name}></MemoComponent>
      </div>
    );
  }
}

export default ParentComponentMemo;
