import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.cbRef = null;
    //the below code pass the DOM element as parameter
    this.setCbRef = element => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    console.log("in componentDidMount");
    // this.inputRef.current.focus();
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.cbRef} />
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    );
  }
}

export default RefsDemo;
