import React, { Component } from "react";

class TypeITPlayGround extends Component {
  handleInput = (event) => {
    event.preventDefault();
    this.props.updateText(event.target.value);
  };

  render() {
    return (
      <div className="main-console">
        <div className="current-score">
          <h3>Current Score</h3>
          <h1>{this.props.currentScore} </h1>
        </div>
        <div className="typing-arena">
          <div>{this.props.typeInText}</div>
          <input
            value={this.props.typedText}
            className="typing-ground"
            onChange={this.handleInput}
            placeholder="Type here"
          ></input>
        </div>
      </div>
    );
  }
}

export default TypeITPlayGround;
