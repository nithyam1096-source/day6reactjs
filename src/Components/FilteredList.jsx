import React from "react";

function FilteredList() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  return (
    <div>
      <h3>Filtered List Rendering (Even Numbers)</h3>
      {evenNumbers.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
    </div>
  );
}

export default FilteredList;