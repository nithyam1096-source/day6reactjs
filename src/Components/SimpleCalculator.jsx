import React from "react";

const SimpleCalculator = ({ num1, num2 }) => {
  const sum = num1 + num2;

  return (
    <div style={styles.container}>
      <h2>Simple Calculator</h2>
      <p>
        {num1} + {num2} = <strong>{sum}</strong>
      </p>
    </div>
  );
};

// Inline styling
const styles = {
  container: {
    border: "2px solid #000",
    padding: "20px",
    width: "250px",
    margin: "20px auto",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default SimpleCalculator;
