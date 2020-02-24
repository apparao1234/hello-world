import React from "react";

//The arrow function is passed as parameter to  React.forwardRef() method
//with two parameters props and ref
//This ref is pointed from FRParetInput component means the called component.
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  );
});
export default FRInput;
