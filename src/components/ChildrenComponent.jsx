import React from "react";
import Header from "./Header";

function ChildrenComponent({ children, name }) {
  return (
    <div>
      <Header />
      <h3>I am {name}</h3>
      {children}
    </div>
  );
}

export default ChildrenComponent;
