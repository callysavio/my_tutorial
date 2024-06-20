import React, { createContext, useState } from "react";

// Create context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({ bgColor: "black", color: "white" });

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.bgColor === "black"
        ? { bgColor: "white", color: "black" }
        : { bgColor: "black", color: "white" }
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
