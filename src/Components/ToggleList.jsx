import React, { useState } from "react";

function ToggleList() {
  const [show, setShow] = useState(true);
  const items = ["Red", "Green", "Blue"];

  return (
    <div>
      <h3>Toggle List Items</h3>
      <button onClick={() => setShow(!show)}>Toggle List</button>
      {show &&
        items.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
}

export default ToggleList;