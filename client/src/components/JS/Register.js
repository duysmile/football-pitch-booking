import React, { Component } from "react";
import axios from "axios";
import "../CSS/Register.css";
import { Button, notification } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Link, Redirect } from "react-router-dom";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.postUsername = this.postUsername.bind(this);
    this.postEmail = this.postEmail.bind(this);
    this.postPass = this.postPass.bind(this);
    this.register = this.register.bind(this);
    this.checkPass = this.checkPass.bind(this);
  }

  postUsername(e) {
    this.setState({ username: e.target.value }); // set username
    if (e.target.value.length) {
      // if inputed
      this.setState({ checkUright: true, checkUwrong: false });
    } else {
      this.setState({
        checkUright: false,
        checkUwrong: true,
        checkU: "Username illegal",
      });
    }

    let user = {
      username: e.target.value,
    };
    axios
      .post(prov.env, user)
      .then((res) => {
        if (res.data === "Username") {
          this.setState({
            checkUwrong: true,
            checkUright: false,
            checkU: "Username existed",
          }); // if username existed
        } else {
          this.setState({ checkUwrong: false, checkUright: true });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  postEmail(e) {
    this.setState({ email: e.target.value });
    if (
      e.target.value.length &&
      e.target.value.indexOf("@") !== -1 &&
      e.target.value.indexOf(".") !== -1
    ) {
      //if inputed
      this.setState({ checkEright: true, checkEwrong: false });
    } else {
      this.setState({
        checkEright: false,
        checkEwrong: true,
        checkE: "Email illegal",
      });
    }
    let user = {
      email: e.target.value,
    };
    axios
      .post(pro.env, user)
      .then((res) => {
        if (res.data === "Email") {
          this.setState({
            checkEwrong: true,
            checkEright: false,
            checkE: "Email existed",
          }); //if email existed
        } else {
          this.setState({ checkEwrong: false, checkEright: true });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  postPass(e) {
    if (this.state.inputPass === true) {
      this.checkPass(e);
    }
    this.setState({ password: e.target.value });
    if (e.target.value.length >= 6) {
      this.setState({ passRight: true, passWrong: false });
    } else {
      this.setState({ passRight: false, passWrong: true });
    }
  }

  checkPass(e) {
    this.setState({ inputPass: true });
    if (e.target.value === this.state.password && e.target.value.length >= 6) {
      this.setState({ checkPright: true, checkPwrong: false });
    } else {
      this.setState({ checkPright: false, checkPwrong: true });
    }
  }

  register(e) {
    const openNotificationWithIcon = (type) => {
      notification[type]({
        message: "Notification",
        description: "Register succesful",
      });
    };
    this.setState({ register: true });
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(pro.env, user)
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
    openNotificationWithIcon("success");
  }

  render() {
    let disable = true;
    if (
      this.state.checkUwrong === false &&
      this.state.checkEwrong === false &&
      this.state.passWrong === false &&
      this.state.checkPwrong === false
    )
      disable = false;
    return (
      <div className="main">
        <div className="form form-register">
          <div className="bg-register" />
          <h3
            style={{
              color: "#8e8e8e",
              fontSize: 17,
              fontWeight: 600,
              marginTop: 30,
            }}
          >
            Đăng ký để xem ảnh và video từ <br /> bạn bè
          </h3>
          <div className="first input-register">
            <input
              name="username"
              onChange={this.postUsername}
              placeholder="Tên người dùng"
              style={{ padding: 5, marginBottom: 5 }}
            ></input>
            {this.state.checkUright && (
              <CheckOutlined style={{ marginLeft: 10, marginTop: 10 }} />
            )}
            {this.state.checkUwrong && (
              <CloseOutlined style={{ marginLeft: 10, marginTop: 10 }} />
            )}
          </div>
          {this.state.checkUwrong && (
            <div className="errors">{this.state.checkU}</div>
          )}
          <div className="input-register">
            <input
              name="email"
              onChange={this.postEmail}
              placeholder="Email"
              style={{ padding: 5, marginBottom: 5 }}
            ></input>
            {this.state.checkEright && (
              <CheckOutlined style={{ marginLeft: 10, marginTop: 10 }} />
            )}
            {this.state.checkEwrong && (
              <CloseOutlined style={{ marginLeft: 10, marginTop: 10 }} />
            )}
          </div>
          {this.state.checkEwrong && (
            <div className="errors">{this.state.checkE}</div>
          )}
          <div className="input-register">
            <input
              name="password"
              onChange={this.postPass}
              placeholder="Mật khẩu"
              type="password"
              style={{ padding: 5, marginBottom: 5 }}
            ></input>
            {this.state.passRight && (
              <CheckOutlined style={{ marginLeft: 10, marginTop: 10 }} />
            )}
            {this.state.passWrong && (
              <CloseOutlined style={{ marginLeft: 10, marginTop: 10 }} />
            )}
          </div>
          <div className="input-register">
            <input
              name="password"
              onChange={this.checkPass}
              placeholder="Xác nhận mật khẩu"
              type="password"
              style={{ padding: 5, marginBottom: 5 }}
            ></input>
            {this.state.checkPright && (
              <CheckOutlined style={{ marginLeft: 10, marginTop: 10 }} />
            )}
            {this.state.checkPwrong && (
              <CloseOutlined style={{ marginLeft: 10, marginTop: 10 }} />
            )}
          </div>
          <Button
            onClick={this.register}
            type="primary"
            style={{ marginTop: 20 }}
            disabled={disable}
          >
            Register
          </Button>
          <div style={{ marginTop: 20 }}>
            Bằng cách đăng ký, bạn đồng ý với Điều khoản,
            <br /> Chính sách dữ liệu và Chính sách cookie của
            <br /> chúng tôi.
          </div>
        </div>
        <div className="form register">
          <div style={{ marginTop: 10 }}>Bạn đã có tài khoản?</div>
          <Link to="/login">Đăng nhập</Link>
        </div>
        {this.state.register && (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )}
      </div>
    );
  }
}
