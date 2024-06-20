import { React, useState, useEffect } from 'react'

const Greeting = ({ name  }) => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Code to run when the 'name' prop changes
      setGreeting(`Hello, ${ name }!`);
  }, [name]); // Dependency array with 'name' ensures this effect runs when 'name' changes

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
