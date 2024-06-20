import React from "react";
function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.color,
        padding: props.padding,
        borderRadius: props.radius,
      }}
    >
      {props.children}
      {props.text}
    </button>
  );
}

export default Button;
