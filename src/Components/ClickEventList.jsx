import React from "react";

function ClickEventList() {
  const items = ["Pen", "Book", "Laptop"];

  const handleClick = (item) => {
    alert(`You clicked on ${item}`);
  };

  return (
    <div>
      <h3>List with Click Event</h3>
      {items.map((item, index) => (
        <p key={index} onClick={() => handleClick(item)}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default ClickEventList;