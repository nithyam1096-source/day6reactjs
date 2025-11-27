import React from "react";

const ShowHideText = ({ isVisible }) => {
  return (
    <div style={styles.container}>
      {isVisible && <h2>Hello, World!</h2>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
};

export default ShowHideText;
