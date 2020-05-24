import React, { Component } from "react";
import "../modal.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      buttonStatus: true,
      errorClass: "",
      passwordError: "",
      passwordLengthError: "",
      passwordMatchError: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "userName") {
      this.setState({ userName: event.target.value });
    } else if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    } else if (event.target.name === "password") {
      this.setState({ password: event.target.value });

      if (event.target.value.length < 6 || event.target.value.length > 12) {
        this.setState({
          passwordError: "password-length",
          passwordLengthError: "Password length should be between 6 to 12",
        });
      } else {
        this.setState({
          passwordError: "",
          passwordLengthError: "",
        });
      }
    } else if (event.target.name === "confirmPassword") {
      this.setState({ confirmPassword: event.target.value });
      this.setState({
        errorClass: "error",
        passwordMatchError: "Password do not match",
      });
      if (
        this.state.password.length >= 6 &&
        this.state.password.length <= 12 &&
        this.state.password === event.target.value
      ) {
        this.setState({
          errorClass: "",
          buttonStatus: false,
          passwordMatchError: "",
        });
      }
    }
  }

  render() {
    return (
      <div>
        <form className="form">
          <h1>SignUp</h1>
          <div className="form-control">
            <label>
              <h3>User name</h3>
              <input
                name="userName"
                type="text"
                value={this.state.userName}
                onChange={this.handleChange}
                placeholder="Enter user name"
              />
            </label>
          </div>

          <div className="form-control">
            <label>
              <h3>Email</h3>
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Enter email id"
              />
            </label>
          </div>

          <div className="form-control">
            <label>
              <h3>Password</h3>
              <input
                name="password"
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
                placeholder="Enter password"
              />
              <small className={this.state.passwordError}>
                {this.state.passwordLengthError}
              </small>
            </label>
          </div>

          <div className="form-control">
            <label>
              <h3>Confirm Password</h3>
              <input
                name="confirmPassword"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                placeholder="re-enter password"
              />
              <small className={this.state.errorClass}>
                {this.state.passwordMatchError}
              </small>
            </label>
          </div>

          <button className="submit-button" disabled={this.state.buttonStatus}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
