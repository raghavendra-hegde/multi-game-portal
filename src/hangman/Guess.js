import React, { Component } from "react";

class Guess extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let guessedLetter = this.refs.textInput.value;
    this.props.updateGuessedLetters(guessedLetter);
    this.refs.textInput.value = "";
  };

  handleReset = (event) => {
    event.preventDefault();
    this.props.resetGame();
  };

  startGame = (event) => {
    event.preventDefault();
    this.props.loadGame();
  };

  render() {
    return (
      <div className="word-guess">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="textInput" maxLength="1" />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button onClick={this.startGame}>Start</button>
        <button className="res" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Guess;
