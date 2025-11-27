import React from "react";

export default function HobbiesList({ hobbies }) {
  return (
    <ul>
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );
}