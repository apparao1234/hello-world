import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  //the UserConsumer wrap function and the input param is what the value is defined at UserProvider(in our case App.js)
  render() {
    return (
      <UserConsumer>
        {username => {
          return <div>Hi {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
