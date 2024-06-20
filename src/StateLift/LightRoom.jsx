import React from "react";

function LightRoom(props) {
  // const [isLightOn, setIsLightOn] = useState(true); // Shared state in LightRoom

  // const toggleLight = () => setIsLightOn(!isLightOn);

  return <div>{props.children}</div>;
}

export default LightRoom;
