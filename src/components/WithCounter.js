import React from "react";
//Updated component accepts a component as input.Here OriginalComponent is parameter
const withCounter = WrapperComponent => {
  class WithCounter extends React.Component {
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
    //sending two parameters to OriginalComponent.These can be destructured in the respective/input component.
    render() {
      return (
        <WrapperComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        ></WrapperComponent>
      );
    }
  }
  return WithCounter;
};
export default withCounter;
