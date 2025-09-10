import React from "react";

function Greeting({ name, message }) {
  return (
    <div style={{ background: "#fff", padding: "1rem", margin: "1rem", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,0.2)" }}>
      <h2>Hi, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}

export default Greeting;
