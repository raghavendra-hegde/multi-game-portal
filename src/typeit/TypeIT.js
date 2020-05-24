import React, { Component } from "react";
import "./typeit.css";
import TypeITControlpanel from "./TypeITControlpanel";
import TypeITPlayGround from "./TypeITPlayGround";
import { sentence } from "../utils/Words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faChessRook } from "@fortawesome/free-solid-svg-icons";
class TypeIT extends Component {
  constructor() {
    super();
    this.state = {
      typeInText: "",
      typedTextValue: "",
      timer: 0,
      currentScore: 0,
      highScore: 0,
      diffLevel: "Rookie",
    };
  }

  updateText = (inputText) => {
    if (this.state.typeInText === inputText) {
      this.setState({
        typeInText: sentence[Math.floor(Math.random() * sentence.length)],
        typedTextValue: "",
      });
      this.updateCurrentScoreAndResetTimmer();
    } else {
      this.setState({
        typedTextValue: inputText,
      });
    }
  };

  startGame = () => {
    if (this.state.typeInText === "") {
      let newTimmerValue;
      switch (this.state.diffLevel) {
        case "Rookie":
          newTimmerValue = 45;
          break;
        case "Hardened":
          newTimmerValue = 30;
          break;
        case "Veteran":
          newTimmerValue = 45;
          break;
        default:
          newTimmerValue = 0;
      }
      this.setState({
        typeInText: sentence[Math.floor(Math.random() * sentence.length)],
        typedTextValue: "",
        currentScore: 0,
        timer: newTimmerValue,
      });
      this.startCountDown(newTimmerValue);
    }
  };

  resetGame = () => {
    this.setState({
      typeInText: "",
      typedTextValue: "",
      currentScore: 0,
      timer: 0,
    });
  };

  gameOver = () => {
    if (this.state.highScore < this.state.currentScore) {
      this.setState({
        highScore: this.state.currentScore,
        timer: 0,
      });
    }

    this.setState({
      typeInText: "",
      typedTextValue: "",
      timer: 0,
      currentScore: 0,
    });
  };

  startCountDown = (timer) => {
    this.intervalHandle = setInterval(this.tick, 1000);
  };

  tick = () => {
    let sec = this.state.timer;
    sec--;
    if (sec <= 0) {
      clearInterval(this.intervalHandle);
      this.gameOver();
    } else {
      this.setState({
        timer: sec,
      });
    }
  };

  difficultySelector = (level) => {
    if (this.state.diffLevel !== level) {
      this.setState({
        diffLevel: level,
      });
    }
  };

  updateCurrentScoreAndResetTimmer() {
    let newCurrentScore = 0;
    let currentScore = this.state.currentScore;
    let newTimmerValue;
    switch (this.state.diffLevel) {
      case "Rookie":
        newCurrentScore = currentScore + 2;
        newTimmerValue = 45;
        break;
      case "Hardened":
        newCurrentScore = currentScore + 3;
        newTimmerValue = 30;
        break;
      case "Veteran":
        newCurrentScore = currentScore + 5;
        newTimmerValue = 45;
        break;
      default:
        newCurrentScore = 0;
    }

    this.setState({
      currentScore: newCurrentScore,
      timer: newTimmerValue,
    });
  }

  render() {
    return (
      <div className="container-typeit">
        <div className="title">
          <FontAwesomeIcon icon={faChessKnight} color="black" /> &nbsp;Welcome
          Keyboard Warrior&nbsp;
          <FontAwesomeIcon icon={faChessRook} color="black" />{" "}
        </div>
        <TypeITControlpanel
          diffLevel={this.state.diffLevel}
          timmerInitValue={this.state.timer}
          highScore={this.state.highScore}
          startGame={this.startGame}
          resetGame={this.resetGame}
          difficultySelector={this.difficultySelector}
          startCountDown={this.startCountDown}
        />
        <TypeITPlayGround
          typeInText={this.state.typeInText}
          typedText={this.state.typedTextValue}
          currentScore={this.state.currentScore}
          updateText={this.updateText}
        />
      </div>
    );
  }
}

export default TypeIT;
