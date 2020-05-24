import React, { Component } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faSmileBeam,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
class DashBoard extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">
          <FontAwesomeIcon icon={faSmileBeam} /> Two ways to lift your Spirits{" "}
          <FontAwesomeIcon icon={faSmile} />
        </h1>
        <div className="container-multi">
          <div className="container-game">
            <h1 className="game-card">TypeIT</h1>
            <Link to="/typeit">
              <button>
                <FontAwesomeIcon icon={faPlayCircle} size="2x" /> &nbsp; Play
                Now &nbsp; <FontAwesomeIcon icon={faPlayCircle} size="2x" />
              </button>
            </Link>
            <div>
              <img src="TypingImage.png" alt="typing game" />
            </div>
          </div>
          <div className="container-game">
            <h1 className="game-card">Hangman</h1>
            <Link to="/hangman">
              <button>
                <FontAwesomeIcon icon={faPlayCircle} size="2x" /> &nbsp; Play
                Now &nbsp; <FontAwesomeIcon icon={faPlayCircle} size="2x" />
              </button>
            </Link>
            <div className="thumb">
              <img src="../assets/images/Hangman-5.svg.png" alt="Hangman" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
