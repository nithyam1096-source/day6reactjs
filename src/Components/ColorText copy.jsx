// components/ColorText.jsx
import React from "react";

export default function ColorText({ text, color }) {
  return <p style={{ color: color }}>{text}</p>;
}