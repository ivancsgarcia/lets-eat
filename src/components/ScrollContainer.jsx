import React from "react";
import "../css/scrollcontainer.css";

function ScrollContainer({ children }) {
  return <div className="scrollable-container">{children}</div>;
}

export default ScrollContainer;
