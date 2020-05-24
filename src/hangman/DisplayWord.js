import React, { Component } from "react";

class DisplayWord extends Component {
  
  render() {
    console.log(this.props.word)
    const wordLetters = this.props.word.split("");

    const answer = wordLetters.map((letter) => {
      let letterState = " _ ";
      if (this.props.guessesdLetters.includes(letter)) {
        letterState = letter;
      }
      return letterState;
    });
    return (
      <div className="guessed">
        <h4>Right guesses </h4>
        {answer}
      </div>
    );
  }
}

export default DisplayWord;
