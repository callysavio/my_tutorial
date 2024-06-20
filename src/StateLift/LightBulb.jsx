import React from "react";

function LightBulb({ isLightOn }) {
  return (
    <div style={{ backgroundColor: isLightOn ? "yellow" : "gray" }}>
      Light Bulb
    </div>
  );
}

export default LightBulb;
