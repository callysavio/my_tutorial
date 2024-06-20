import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div className="user-details">
      <Child name="Callistus" age={21} level="Senior" love={3} gender={true} />
      <Child name="Lesi" level="Newbie" love={100} age={41} gender={false} />
      <Child name="Stanley" age={16} level="Principal" love={1} gender={true} />
      <Child name="Comrade" level="Mid-level" love={0} age={16} gender={true} />
    </div>
  );
}

export default Parent;
