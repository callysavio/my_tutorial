import { React, useState } from "react";

function HookComponent() {
  const [name, setName] = useState({ name: "Callistus", age: 45 });

  const changeName = () => {
    setName({ name: "Lesi", age: 475 });
  };

  return (
    <div>
      <p>{`${name.name} , ${name.age}`}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default HookComponent;
