import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Settings from "./Settings";
import Profile from "./Profile";
import SignUp from "./SignUp";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="About-us" element={<About />} />
        <Route path="Contact-us" element={<Contact />} />
        <Route path="Dashboard" element={<Dashboard />}>
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="Signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default Pages;
