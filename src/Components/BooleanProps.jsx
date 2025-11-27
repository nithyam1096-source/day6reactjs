// components/BooleanProp.jsx
import React from "react";

export default function BooleanProp({ isStudent }) {
  return <h3>{isStudent ? "Student" : "Not a Student"}</h3>;
}