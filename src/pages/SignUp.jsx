import React from "react";

function SignUp() {
  return (
    <div>
      <h2 id="w-h">Welcome to Sign Up Page</h2>

      <form>
        <input type="text" placeholder="Enter your username" />
        <input type="password" placeholder="Create password" name="ps" />
        <input type="password" placeholder="Confirm password" name="cps" />
        <input type="email" placeholder="email address" />
        <input type="submit" value="SIGN UP" />
      </form>
    </div>
  );
}

export default SignUp;
