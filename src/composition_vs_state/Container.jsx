import React from "react";

function Container(props) {
  return (
    <div>
      <h1>Container</h1>
      {props.children}
    </div>
  );
}

export default Container;
