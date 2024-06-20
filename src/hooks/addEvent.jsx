import React, { useEffect, useState } from "react";

const WindowSizeComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []); // Empty array ensures the effect is set up once

  return <div>Window width: {windowWidth}</div>;
};

export default WindowSizeComponent