// components/MultipleProps.jsx
import React from "react";

export default function MultipleProps({ name, age }) {
  return (
    <p>
      Name: {name} | Age: {age}
    </p>
  );
}