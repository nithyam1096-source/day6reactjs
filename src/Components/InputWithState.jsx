import { useState } from "react";

function InputWithState() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Input Field with State</h2>
      <input 
        type="text" 
        placeholder="Type something..." 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default InputWithState;