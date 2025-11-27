// components/ConditionalWelcome.jsx
import React from "react";

export default function ConditionalWelcome({ name }) {
  return <h2>Welcome, {name ? name : "Guest"}</h2>;
}