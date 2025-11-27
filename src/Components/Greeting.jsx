function Greeting({ name }) {
  const style = {
    backgroundColor: "#d1e7ff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "bold",
  };

  return <div style={style}>Hello, {name}!</div>;
}

export default Greeting;
