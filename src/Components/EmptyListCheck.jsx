import React from "react";

function EmptyListCheck() {
  const items = [];

  return (
    <div>
      <h3>Rendering Empty Lists</h3>
      {items.length === 0 ? <p>No items available</p> : items.map(item => <p>{item}</p>)}
    </div>
  );
}

export default EmptyListCheck;