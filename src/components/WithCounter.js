import React from "react";
//Updated component accepts a component as input.Here OriginalComponent is parameter
const withCounter = (WrapperComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    //added for log debug
    componentDidMount() {
      console.log("WithCounter HOC componentDidMount");
    }

    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };

      console.log("WithCounter HOC  constructor");
    }
    // As set state method required prev state, we must pass function  with previous state and increase the count
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNumber };
      });
    }; //sending two parameters to OriginalComponent.These can be destructured in the respective/input component.
    render() {
      console.log("WithCounter HOC  render() method");

      return (
        <WrapperComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        ></WrapperComponent>
      );
    }
  }
  return WithCounter;
};
export default withCounter;
