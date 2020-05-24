import React, { Component } from "react";
import {words} from "../utils/Words";
import DisplayWord from "./DisplayWord";
import Guess from "./Guess";
import Wrong from "./Wrong";

import "./hangman.css";
class HangMan extends Component {
  constructor() {
    super();
    this.state = {
      wordToGuess: words[Math.floor(Math.random() * words.length)],
      guessedLetters: [],
      guessesRemaining: 5,
    };
    // this.updateGuessedLetters = this.updateGuessedLetters.bind(this)
  }

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
    if (this.state.guessesRemaining <= 0) {
      alert("You've last");
    } else if (this.wordIsGuessed()) {
      alert(`You totally won and guessed correct ${this.state.wordToGuess}`);
    }
  }

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
            <h5>Guess this word => </h5>
            <h3>{this.state.wordToGuess}</h3>
            <h2>clue</h2>
            <p>jsavdhasbdhvadsdbjsakdbsabdasjksdbbdsabdjasdbskasbdjbasbsa</p>
            <p>kjdalksdsfsdfybdsiufsadinsdjnsajkaksjdjn</p>
          </div>

          <div className="letterChoosen">
            <DisplayWord
              word={this.state.wordToGuess}
              guessesdLetters={this.state.guessedLetters}
            />
            <h5>Wrong Guesses</h5>
            <Wrong
              word={this.state.wordToGuess}
              guessedLetters={this.state.guessedLetters}
            />
          </div>
          <Guess updateGuessedLetters={this.updateHangmanState} />
        </div>

        <div className="hangOrSave">
          
          
        </div>
        <div className='hangimage'>sadasdasdsdasdaaaaaaaaaaasadasdasdasdasd </div>
      </div>
    );
  }
}

export default HangMan;
