import React, { Component } from "react";
import "../modal.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordError: "",
      passwordLengthError: "",
      buttonStatus: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    } else if (event.target.name === "password") {
      this.setState({ password: event.target.value });

      if (event.target.value.length < 6 || event.target.value.length > 12) {
        this.setState({
          passwordError: "password-length",
          passwordLengthError: "Invalid Password",
        });
      } else {
        this.setState({
          passwordError: "",
          passwordLengthError: "",
        });
      }
    }
  }

  render() {
    let loginButtonStatus = true;
    if (
      this.state.email.length > 0 &&
      this.state.password.length >= 6 &&
      this.state.password.length <= 12
    ) {
      loginButtonStatus = false;
    }
    return (
      <div>
        <form>
          <h1>Login</h1>
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

          <button className="submit-button" disabled={loginButtonStatus}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
