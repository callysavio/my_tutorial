import React from "react";
import Prop from "./Prop";

function ListItem() {
  return (
    <div>
      <Prop id={1} name="Alice" />

      <Prop id={2} name="Bob" />

      <Prop id={3} name="Charlie" />
    </div>
  );
}

export default ListItem;
