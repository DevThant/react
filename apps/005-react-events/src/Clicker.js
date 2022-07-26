import React, { Component } from "react";

class Clicker extends Component {
  state = {
    score: 0,
    count: 0,
  };
  clickHandler = (e) => {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ score: rand, count: this.state.count + 1 });
  };
  reset = (e) => {
    this.setState({ score: 0, count: 0 });
  };
  render() {
    const { score, count } = this.state;
    return (
      <div>
        <h1>Your Number: {score}</h1>
        {score === 7 ? (
          <div>
            <h2>You Win!</h2>
            <p>Took you {count} times!</p>
            <button onClick={this.reset}>Reset</button>
          </div>
        ) : (
          <button onClick={this.clickHandler}>Get Number</button>
        )}
      </div>
    );
  }
}

export default Clicker;

// alt syntax
// {score === 7 && <div>You Win!</div>}
// {score !==7 && <button onClick={this.clickHandler}>Get Number</button>}
