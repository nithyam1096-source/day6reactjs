import React from "react";

const Profile = ({ name = "Suresh", age = "29", city = "Krishnagiri" }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "260px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
    margin: "15px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
};

export default Profile;


