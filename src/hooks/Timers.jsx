import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup
    };
  }, []); // Empty array ensures the effect is set up once

  return <div>Count: {count}</div>;
};

export default TimerComponent;
