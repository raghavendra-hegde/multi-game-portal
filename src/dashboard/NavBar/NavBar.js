import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import "./navbar.css";
import SignUp from "../../Modal/Signup/SignUp";
import Login from "../../Modal/Login/Login";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component {
  
  render() {
    
    return (
      <header className="nav-bar">
        <div className="logo">
          <Link to="/">
            <h3><FontAwesomeIcon icon={faGamepad} color='white'/>  Multi game portal  <FontAwesomeIcon icon={faGamepad} color='white'/></h3>
          </Link>
        </div>

        <nav>
          <ul className="nav-items">
            <li
              onClick={() => {
                this.props.openModal("open", <SignUp />);
              }}
            >
              Sign Up &nbsp;
            </li>
            <li>/</li>
            <li
              onClick={() => {
                this.props.openModal("open", <Login />);
              }}
            >
              &nbsp; Login
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispatcher
  );
}

export default connect(null, mapDispatchToProps)(NavBar);
