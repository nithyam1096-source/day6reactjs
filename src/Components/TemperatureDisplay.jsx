import React from "react";

const TemperatureDisplay = ({ temperature }) => {
  let message = "";

  if (temperature > 30) {
    message = "Hot";
  } else if (temperature < 15) {
    message = "Cold";
  } else {
    message = "Normal";
  }

  return (
    <div style={styles.container}>
      <h2>Temperature: {temperature}°C</h2>
      <p style={styles.text}>{message}</p>
    </div>
  );
};

// Inline styling
const styles = {
  container: {
    padding: "20px",
    border: "2px solid #000",
    width: "250px",
    textAlign: "center",
    borderRadius: "10px",
    margin: "20px auto",
  },
  text: {
    fontSize: "22px",
    fontWeight: "bold",
  },
};

export default TemperatureDisplay;
