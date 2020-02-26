import React from "react";

const Greet = props => {
  // console.log(props.name);
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} and your hero name is {heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
