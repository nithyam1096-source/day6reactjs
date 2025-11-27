import React from "react";

export default function Card({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}