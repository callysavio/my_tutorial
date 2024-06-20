import React from "react";
import ContactForm from "./ContactForm";
// import Stan from "./Stan";
function Students({ name, name2, name3 }) {
  return (
    <div>
      <ContactForm />
      <h2>List of Students</h2>
      <p>1. {name}</p>
      <p>2. {name2}</p>
      <p>3. {name3}</p>
    </div>
  );
}

export default Students;
