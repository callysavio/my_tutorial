import React from "react";

function SecondCounter({ count, increaseCount, decreaseCount }) {
  return (
    <div>
      <center>
        <h2>Second Counter</h2>
      </center>
      <p>Count: {count}</p>
      <p>
        <button onClick={() => increaseCount()}>+</button>
        <button onClick={() => decreaseCount()}>-</button>
      </p>
    </div>
  );
}

export default SecondCounter;
