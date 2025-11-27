// components/ButtonWithProp.jsx
import React from "react";

export default function ButtonWithProp({ showMessage }) {
  return <button onClick={showMessage}>Click Me</button>;
}