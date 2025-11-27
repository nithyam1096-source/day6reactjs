import { useState } from "react";

function TwoStates() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h2>Multiple useState Hooks</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default TwoStates;