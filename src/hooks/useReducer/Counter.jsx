import React, { useReducer } from "react";

function Counter() {
  const initialState = { count: 0 };

  function counterReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return { count: state.count };
    }
  }

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h1>Counter With useReducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default Counter;
