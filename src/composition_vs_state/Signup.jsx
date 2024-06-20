import React from "react";
import BaseForm from "./BaseForm";

function Signup() {
  const signupDtails = [
    { name: "name", type: "text", placeholder: "Enter your name" },
    { name: "phone", type: "tel", placeholder: "Enter your phone number" },
    { name: "email", type: "email", placeholder: "Enter your email" },
    { name: "password", type: "password", placeholder: "Enter your password" },
  ];

  return (
    <>
      {signupDtails.map((data, index) => (
        <div key={index}>
          <BaseForm
            title={data.title}
            placeholder={data.placeholder}
            name={data.name}
            type={data.type}
          />
        </div>
      ))}
    </>
  );
}

export default Signup;
