import React, { Component } from "react";

class RandomNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.timer();
  }
  timer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum) + 1;
      this.setState({ num: rand });
    }, 1000);
  }

  render() {
    return <h1>{this.state.num}</h1>;
  }
}

export default RandomNum;
