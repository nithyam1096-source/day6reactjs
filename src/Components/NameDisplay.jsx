import { useState } from "react";

function NameDisplay() {
  const [name, setName] = useState("");

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Name Display</h2>
      <input 
        type="text"
        placeholder="Type your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default NameDisplay;
