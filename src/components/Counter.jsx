import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCounter = (event) => {
    console.log(event);
    console.log(event.target);
    return setCount(count + 1);
  };

  const decreaseCounter = (event) => {
    console.log(event);
    console.log(event.target);

    return setCount(count - 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={decreaseCounter}>-</button>
      <button onClick={increaseCounter}>+</button>
    </>
  );
}

export default Counter;
