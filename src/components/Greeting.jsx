import React from "react";

function Greeting() {
  let isLoggedIn = true;
  return (
    <div>{!isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}</div>
  );
}

export default Greeting;
