import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Sorry! The page you are looking for is not available...</h1>
      <p>
        <Link to="/">Back to home page</Link>
      </p>
    </div>
  );
}

export default NotFound;
