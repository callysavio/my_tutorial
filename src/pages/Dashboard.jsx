import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2 id="w-h">Welcome to your Dashboard</h2>

      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Dashboard;
