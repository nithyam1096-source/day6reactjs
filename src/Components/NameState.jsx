import { useState } from "react";

function NameState() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>State with Strings</h2>
      <p>Name: {name}</p>
      <button onClick={() => setName("Suresh")}>Set Name</button>
    </div>
  );
}

export default NameState;