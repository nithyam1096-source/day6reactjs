// BasicListRendering.jsx
import React from "react";

function BasicListRendering() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h3>Basic List Rendering</h3>
      {numbers.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
    </div>
  );
}

export default BasicListRendering;