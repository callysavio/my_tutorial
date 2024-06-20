import React, { useEffect, useState } from "react";
import displayName from "./subScribe";
const SubscriptionComponent = () => {
  const [data, setData] = useState([]);
  // const [newData, setNewData] =

  useEffect(() => {
    displayName((newData) => {
      setData(newData);
    });
  }, []); // Empty array ensures the effect is set up once

  return (
    <>
      <div>
        Data
        {data.map((item) => (
          <ul key={item.id}>
            <li>Data: {item.name}</li>
            <li>{item.role}</li>
            <li>{item.age}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default SubscriptionComponent;
