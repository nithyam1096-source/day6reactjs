import React from "react";

const ClickCounter = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 18px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Click Me
    </button>
  );
};

export default ClickCounter;
