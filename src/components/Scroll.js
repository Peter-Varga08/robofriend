import React from "react";

/*  the {{}} means javascript code and an object in that code, respectively */
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
