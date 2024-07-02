import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate();

  const openSignUp = () => {
    navigate("/Signup");
  };

  return (
    <div>
      <nav>
        <h2>
          <Link to="Home">Logo</Link>
        </h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="About-us">About</NavLink>
          </li>
          <li>
            <NavLink to="Contact-us">Contact</NavLink>
          </li>
          <li>
            <NavLink to="Dashboard">Dashboard</NavLink>
          </li>
          <li>
            <button onClick={openSignUp}>Sign Up</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
