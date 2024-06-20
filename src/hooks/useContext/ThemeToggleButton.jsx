import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>
        {theme.bgColor === "light" ? "dark" : "light"}
      </button>
    </>
  );
};

export default ThemeToggleButton;
