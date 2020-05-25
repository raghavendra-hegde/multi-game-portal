import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
class Guess extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let guessedLetter = this.refs.textInput.value;
    if(this.props.gameStarted){
      this.props.updateGuessedLetters(guessedLetter.toUpperCase());
    }
    
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
            <button><FontAwesomeIcon icon={faLightbulb}/></button>
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
