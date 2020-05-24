import React, { Component } from "react";

class DisplayWord extends Component {
  render() {
    const wordLetters = this.props.word.split("");
    const answer = wordLetters.map((letter) => {
      let letterState = " _ ";
      if (this.props.guessesdLetters.includes(letter)) {
        letterState = letter;
      }
      return letterState;
    });
    return <div className="guessed">{answer}</div>;
  }
}

export default DisplayWord;
