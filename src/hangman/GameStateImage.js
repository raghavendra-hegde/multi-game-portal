import React, { Component } from "react";
import img1 from "../assets/images/hanging/img1.png";
import img2 from "../assets/images/hanging/img2.png";
import img3 from "../assets/images/hanging/img3.png";
import img4 from "../assets/images/hanging/img4.png";
import img5 from "../assets/images/hanging/img5.png";
import img6 from "../assets/images/hanging/img6.png";
import win from "../assets/images/hanging/win.png";
import gameimg from "../assets/images/hanging/hangme.png";
class GameStateImage extends Component {
  getImage = () => {
    let imageId = this.props.imgId;
    switch (imageId) {
      case 1:
        return <img src={img1} alt="hanging state" />;

      case 2:
        return <img src={img2} alt="hanging state" />;

      case 3:
        return <img src={img3} alt="hanging state" />;

      case 4:
        return <img src={img4} alt="hanging state" />;

      case 5:
        return <img src={img5} alt="hanging state" />;

      case 6:
        return <img src={img6} alt="hanging state" />;

      case 7:
        return <img src={win} alt="hanging state" />;

      default:
        return <img src={gameimg} alt="hanging state" />;
    }
  };
  render() {
    return <div className="game-state-image">{this.getImage()}</div>;
  }
}

export default GameStateImage;
