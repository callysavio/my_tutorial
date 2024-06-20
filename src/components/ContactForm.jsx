import React, { useState } from "react";
import Students from "./Students.jsx";
import Stan from "./Stan";

function ContactForm() {
  const [form, setInputs] = useState({
    name: "",
    myEmail: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="myEmail"
            value={form.myEmail}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input type="submit" />
        </label>
      </form>{" "}
      <Students name="Lesi" name2="Emmanuel" name3="Henry" />
      <Stan site="Cool" site2="Hot" site3="Warm" />
    </div>
  );
}

export default ContactForm;
