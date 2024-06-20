import { React, useState } from "react";
import FirstCounter from "./FirstCounter";
import SecondCounter from "./SecondCounter";

function ParentCounter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <FirstCounter
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
      <SecondCounter
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </div>
  );
}

export default ParentCounter;
