import React from "react";
import "./ProfileCard.css"; // External CSS

const ProfileCard = ({ name, age, location }) => {
  // Inline styling
  const cardStyle = {
    backgroundColor: "#f0f8ff",
    padding: "20px",
    borderRadius: "15px",
    width: "260px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    margin: "20px auto"
  };

  const nameStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333"
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p className="age">Age: {age}</p>
      <p className="location">Location: {location}</p>
    </div>
  );
};

export default ProfileCard;
