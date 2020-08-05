import React from "react";
import Joi from "joi-browser";
import { login } from "../Services/AuthService";
import Form from "../Common/form";
import logo from "../Pictures/logo.jpeg";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    // Call the server
    const { data } = this.state;
    login(data.username, data.password);
  };

  render() {
    return (
      <div>
        <div className="text-center mb-4">
          <img className="logo" src={logo} alt="" width="200" height="200" />
          <h1 className="h3 mb-3 font-weight-normal">Bienvenido</h1>
        </div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
