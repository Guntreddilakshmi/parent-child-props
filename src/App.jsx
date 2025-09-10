import React from "react";

function Greeting({ name, message }) {
  return (
    <div style={{ background: "#eee", padding: "1rem", margin: "1rem" }}>
      <h2>Hi,Lakshmi {name}!</h2>
      <p>{message}</p>
    </div>
  );
}

export default Greeting;
