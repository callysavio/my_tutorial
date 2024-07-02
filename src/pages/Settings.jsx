import React from "react";

function Settings() {
  return (
    <div>
      <form>
        <input type="text" placeholder="change your username" />
        <input type="password" placeholder="Enter a new password" />
        <input type="submit" value="save changes" />
      </form>
    </div>
  );
}

export default Settings;
