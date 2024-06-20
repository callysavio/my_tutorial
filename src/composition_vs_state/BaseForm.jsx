import React from "react";

const BaseForm = ({ title, buttonText, fields = [], onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {};
    fields.forEach((field) => {
      formData[field.name] = event.target[field.name].value;
    });
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {fields.map((field, index) => (
        <div key={index}>
          <label>
            {field.label}:
            <input
              type={field.type}
              name={field.name}
              required={field.required}
            />
          </label>
        </div>
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default BaseForm;
