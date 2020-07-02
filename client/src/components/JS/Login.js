import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: "",
      button: true,
    };
    this.postUsername = this.postUsername.bind(this);
    this.postPassword = this.postPassword.bind(this);
    this.postLogin = this.postLogin.bind(this);
  }
  async postUsername(event) {
    await this.setState({ username: event.target.value });
    if (this.state.username.length > 0 && this.state.password.length >= 6) {
      this.setState({ button: false });
    } else {
      this.setState({ button: true });
    }
  }
  async postPassword(event) {
    await this.setState({ password: event.target.value });
    if (this.state.username.length > 0 && this.state.password.length >= 6) {
      this.setState({ button: false });
    } else {
      this.setState({ button: true });
    }
  }

  postLogin(event) {
    const username = this.state.username;
    const password = this.state.password;
    const data = {
      username: username,
      password: password,
    };
    axios
      .post("https://prs8c.sse.codesandbox.io/login", data)
      .then((res) => {
        if (!res.data.errors.length) {
          window.localStorage.setItem("token", res.data.token);
          this.setState({ login: true });
        } else {
          let error = res.data.errors.toString();
          // openNotificationWithIcon("error", error);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="right-view"></div>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.postUsername}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.postPassword}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Id" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
