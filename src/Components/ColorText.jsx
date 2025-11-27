import React from "react";

const ColorText = ({ text, color }) => {
  return (
    <h2 style={{ color: color }}>
      {text}
    </h2>
  );
};

export default ColorText;