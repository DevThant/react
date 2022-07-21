import React, { Component } from "react";
import "./Clicker.css";

class Clicker extends Component {
  state = {
    score: 0,
  };
  clickHandler = (e) => {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ score: rand });
  };
  reset = (e) => {
    this.setState({ score: 0 });
  };
  render() {
    let score = this.state.score;
    return (
      <div>
        <h1>Your score: {score}</h1>
        <h3>{score === 7 ? "You Win" : ""}</h3>
        <button
          className={score === 7 ? "Clicker-bh" : ""}
          onClick={this.clickHandler}
        >
          Get a Number
        </button>
        <button
          className={score === 7 ? "" : "Clicker-bh"}
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Clicker;
