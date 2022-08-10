import React, { Component } from "react";

class AddIcons extends Component {
  static defaultProps = {
    icons: [
      "cool",
      "friendly",
      "happy",
      "sad",
      "smile",
      "speechless",
      "suspect",
      "tongue",
    ],
  };

  state = {
    icons: [],
  };

  addIcon = () => {
    console.log("Inside Add Icons");
    let rand = Math.floor(Math.random() * this.props.icons.length);
    let newIcon = this.props.icons[rand];
    this.setState({ icons: [...this.state.icons, newIcon] });
  };
  render() {
    return (
      <div>
        <h1>Icons</h1>
        <div>
          {this.state.icons.map((icon) => (
            <i class={`lni lni-${icon}`}></i>
          ))}
        </div>
        <button onClick={this.addIcon}>Add Icon</button>
      </div>
    );
  }
}

export default AddIcons;
