import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

function CurrentTheme() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div>
        <ul>
          <li>Current Background: {theme.bgColor }</li>
          <li>Current color: {theme.color}</li>
        </ul>
      </div>
    </div>
  );
}

export default CurrentTheme;
