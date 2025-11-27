import { useState } from "react";

function LightToggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Light Toggle</h2>
      <h3>{isOn ? "Light ON 💡" : "Light OFF 🔌"}</h3>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle Light
      </button>
    </div>
  );
}

export default LightToggle;