import React, { Component } from "react";
import { hangmanWords } from "../utils/Words";
import DisplayWord from "./DisplayWord";
import Guess from "./Guess";
import Wrong from "./Wrong";

import "./hangman.css";
import GameStateImage from "./GameStateImage";
class HangMan extends Component {
  constructor() {
    super();
    this.state = {
      wordToGuess: "",
      guessedLetters: [],
      guessesRemaining: 0,
      clue: "",
      topic: "",
      correctGuess: [],
      gameStarted: false,
      imageId:0
    };
  }

  loadGame = () => {
    if (this.state.wordToGuess === "") {
      console.log(hangmanWords.length);
      const toBeGussedObject =
        hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
      this.setState({
        wordToGuess: toBeGussedObject.answer,
        guessedLetters: [],
        guessesRemaining: 6,
        clue: toBeGussedObject.clue,
        topic: toBeGussedObject.topic,
        gameStarted: true,
        imageId:0
      });
    }
  };

  updateGuessedLetters = (letter) => {
    if (this.state.guessedLetters.includes(letter)) {
      alert(`You have gussed the letter ${letter}`);
    } else {
      this.setState({
        guessedLetters: [...this.state.guessedLetters, letter],
      });
    }
  };

  updateGuessessRemaining(letter) {
    console.log(this.state.guessedLetters.includes(letter));
    console.log(this.state.wordToGuess.split("").includes(letter));
    if (
      !this.state.guessedLetters.includes(letter) &&
      !this.state.wordToGuess.split("").includes(letter)
    ) {
      console.log("*****Remainging guess*******")
      console.log(this.state.guessesRemaining);

      console.log("*****image ID*******");
      console.log(this.state.imageId)
      this.setState({ 
        guessesRemaining: this.state.guessesRemaining - 1 ,
      imageId:(this.state.imageId + 1)});

    }

    console.log(this.state.imageId)
  }

  gameOver() {
    if (this.state.guessesRemaining === 0) {
      alert(`You got the man killed, Right Answer was ${this.state.wordToGuess}`);
      this.resetGame();
    } else if (this.wordIsGuessed()) {
      this.setState({
        imageId:7
      })
      alert("You saved this man...!! Thank you, avenger");
      this.resetGame();
    }
  }

  resetGame = () => {
    this.setState({
      wordToGuess: "",
      guessedLetters: [],
      guessesRemaining: 6,
      clue: "",
      topic: "",
      gameStarted: false,
      imageId:0
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
                <li>Topic : {this.state.topic}</li>
                <li>{this.state.clue}</li>
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
            gameStarted={this.state.gameStarted}
          />

          <div className="wrong-input">
            <h5>Wrong Guesses</h5>
            <Wrong
              word={this.state.wordToGuess}
              guessedLetters={this.state.guessedLetters}
            />
          </div>
        </div>

        <div className="image">
          <GameStateImage imgId={this.state.imageId} />
        </div>
      </div>
    );
  }
}

export default HangMan;
