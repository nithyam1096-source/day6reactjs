import { useState } from "react";

function ToggleBoolean() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>Toggle Boolean State</h2>
      <p>{isOn ? "TRUE" : "FALSE"}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

export default ToggleBoolean;