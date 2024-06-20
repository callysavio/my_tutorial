import React from "react";
function WithExtraInfo(Component) {
  return function EnhancedComponent(props) {
    return <Component {...props} extraInfo="This is extra info" />;
  };
}

export default WithExtraInfo;
