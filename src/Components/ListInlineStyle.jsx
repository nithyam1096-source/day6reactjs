// ListInlineStyle.jsx
import React from "react";

function ListInlineStyle() {
  const fruits = [
    { id: 1, name: "Apple", color: "red" },
    { id: 2, name: "Banana", color: "yellow" },
    { id: 3, name: "Grapes", color: "purple" },
  ];

  return (
    <div>
      <h3>List with Inline Styling</h3>
      {fruits.map((fruit) => (
        <p key={fruit.id} style={{ color: fruit.color }}>
          {fruit.name}
        </p>
      ))}
    </div>
  );
}

export default ListInlineStyle;