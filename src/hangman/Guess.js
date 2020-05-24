import React, { Component } from "react";

class Guess extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let guessedLetter = this.refs.textInput.value;
    this.props.updateGuessedLetters(guessedLetter);
    this.refs.textInput.value = "";
  };
  render() {
    return (
      <div className='word-guess'>
        
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="textInput" maxLength="1" />
          <button>Submit</button>
        </form>
        <button>Reset</button>
      </div>
    );
  }
}

export default Guess;
