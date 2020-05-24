import React, { Component } from "react";
import { words } from "../utils/Words";
import DisplayWord from "./DisplayWord";
import Guess from "./Guess";
import Wrong from "./Wrong";

import "./hangman.css";
class HangMan extends Component {
  constructor() {
    super();
    this.state = {
      wordToGuess: "",
      guessedLetters: [],
      guessesRemaining: 0,
      clue1: "",
      clue2: "",
      clue3: "",
      correctGuess: [],
      gameStarted:false
    };
  }

  loadGame = () => {
    if (this.state.wordToGuess === "") {
      this.setState({
        wordToGuess: words[Math.floor(Math.random() * words.length)],
        guessedLetters: [],
        guessesRemaining: 5,
        clue1: "Subject",
        clue2: " some info 1",
        clue3: " Some info 2 ",
        gameStarted:true
      });
    }

    console.log(this.state.wordToGuess);
  };

  updateGuessedLetters = (letter) => {
    console.log(this.state.guessedLetters);
    if (this.state.guessedLetters.includes(letter)) {
      alert(`You have gussed the letter ${letter}`);
    } else {
      this.setState({
        guessedLetters: [...this.state.guessedLetters, letter],
      });
    }
  };

  updateGuessessRemaining(letter) {
    if (
      !this.state.guessedLetters.includes(letter) &&
      !this.state.wordToGuess.split("").includes(letter)
    ) {
      this.setState({ guessesRemaining: this.state.guessesRemaining - 1 });
    }
  }

  gameOver() {
    if (this.state.guessesRemaining === 0) {
      alert("You got the man killed");
      this.setState({
        guessedLetters: [],
        wordToGuess: "",
      });
    } else if (this.wordIsGuessed()) {
      alert('You saved this man...!! Thank you, avenger');
      this.resetGame();
    }
  }

  resetGame = () => {
    this.setState({
      wordToGuess: "",
      guessedLetters: [],
      guessesRemaining: 5,
      clue1: "",
      clue2: "",
      clue3: "",
      gameStarted:false
    });
  };

  wordIsGuessed() {
    const guessState = this.state.wordToGuess.split("").map((letter) => {
      if (this.state.guessedLetters.includes(letter)) {
        return letter;
      }
    });

    return guessState.join("") === this.state.wordToGuess;
  }

  updateHangmanState = (letter) => {
    this.updateGuessedLetters(letter);
    this.updateGuessessRemaining(letter);
    this.gameOver();
  };

 
  render() {
    return (
      <div className="container-hangman">
        <div className="title">Welcome Avenger... Save this man</div>

        <div className="words">
          <div className="guess">
            <div>
              <h4>Connect the dots</h4>
              <ul>
                <li>{this.state.clue1}</li>
                <li>{this.state.clue2}</li>
                <li>{this.state.clue3}</li>
              </ul>
            </div>

            <DisplayWord
              word={this.state.wordToGuess}
              guessesdLetters={this.state.guessedLetters}
            />
          </div>
        </div>

        <div className="input-section">
          <Guess
            updateGuessedLetters={this.updateHangmanState}
            loadGame={this.loadGame}
            resetGame={this.resetGame}
          />

          <div className="wrong-input">
            <h5>Wrong Guesses</h5>
            <Wrong
              word={this.state.wordToGuess}
              guessedLetters={this.state.guessedLetters}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HangMan;
