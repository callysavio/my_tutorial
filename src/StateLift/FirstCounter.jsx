import { React } from "react";

function FirstCounter({ count, increaseCount, decreaseCount }) {
  return (
    <div>
      <center>
        <h2>First Counter</h2>
      </center>
      <p>Count: {count}</p>
      <p>
        <button onClick={() => increaseCount()}>+</button>
        <button onClick={() => decreaseCount()}>-</button>
      </p>
    </div>
  );
}

export default FirstCounter;
