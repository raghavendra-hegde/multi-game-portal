import React, { Component } from "react";

class TypeITControlpanel extends Component {

  startGame = (event) => {
    event.preventDefault();
    this.props.startGame();
  };

  resetGame = (event) => {
    event.preventDefault();
    this.props.resetGame();
  };

  selectDifficulty = (event) => {
    event.preventDefault();
    const level = event.target.value;
    this.props.difficultySelector(level);
  };

  render() {
    return (
      <div className="control-pane">
        <div className="diff-selector">
          <h3>Difficulty</h3>
          <select value={this.props.diffLevel} onChange={this.selectDifficulty}>
            <option value="Rookie">Rookie</option>
            <option value="Hardened">Hardened</option>
            <option value="Veteran">Veteran</option>
          </select>
        </div>
        <div className="timmer">
          <h3>Timer</h3>
          <h1>{this.props.timmerInitValue}</h1>
        </div>

        <div className="game-controller">
          <form>
            <button onClick={this.startGame} className="game-controller-start">
              S
            </button>
            <button
              onClick={this.resetGame}
              className="game-controller-restart"
            >
              R
            </button>
          </form>
        </div>
        <div className="high-score">
          <h3>High Score</h3>
          <h1>{this.props.highScore}</h1>
        </div>
      </div>
    );
  }
}
export default TypeITControlpanel;
