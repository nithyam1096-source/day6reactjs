import React from "react";

function ListWithKeys() {
  const names = ["Nithya", "Suresh", "Kavin", "Liya"];

  return (
    <div>
      <h3>List with Unique Keys</h3>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default ListWithKeys;
