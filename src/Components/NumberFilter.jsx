
// src/Components/NumberFilter.jsx

export default function NumberFilter() {
  const numbers = [10, 13, 22, 25, 30, 41, 50];

  return (
    <div>
      <h2>Mini Project 4: Even Number Filter</h2>
      <ul>
        {numbers
          .filter((num) => num % 2 === 0)
          .map((num, index) => (
            <li key={index} style={{ color: "blue", fontWeight: "bold" }}>
              {num}
            </li>
          ))}
      </ul>
    </div>
  );
}
