import React, { useState } from "react";

function Mailbox() {
  const [unreadMessages, setUnreadMessages] = useState(["Hello", "Hi"]);
let message
  return (
    <div>
      <h1>Hello! {message}</h1>
    </div>
  );
}

export default Mailbox;
