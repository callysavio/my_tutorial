import React from "react";

function LightSwitch({ isLightOn, toggleLight }) {
  return (
    <button onClick={toggleLight}>{isLightOn ? "Turn Off" : "Turn On"}</button>
  );
}

export default LightSwitch;
