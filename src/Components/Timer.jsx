import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>Current Time</h2>
        <p style={styles.time}>{this.state.time}</p>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    padding: "20px",
    border: "2px solid black",
    width: "250px",
    borderRadius: "10px",
    margin: "20px auto",
  },
  time: {
    fontSize: "22px",
    fontWeight: "bold",
  }
};

export default Timer;
