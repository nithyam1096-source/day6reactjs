function SimpleCounter() {
  return (
    <div
      style={{
        width: "200px",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "20px auto",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>0</h2>

      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#4caf50",
          color: "white",
          cursor: "pointer",
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default SimpleCounter;
