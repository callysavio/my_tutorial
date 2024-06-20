import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <form>
        <h3>Here is my form to demonstrate controlled component</h3>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default NameForm;
