import React from "react";

function Child({ name, love, level, age, gender }) {
  return (
    <>
      <div id="single-user-detail">
        <h1>About {name}</h1>
        <p>I am a {level} Developer</p>
        <p>I am {age} years old</p>
        <p>I am fallen in love for only {love} friends</p>
        <p>Gender: {gender ? "male" : "female"}</p>
      </div>
    </>
  );
}

export default Child;
