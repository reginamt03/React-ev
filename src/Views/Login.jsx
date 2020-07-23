import React, { Component } from "react";
import logo from "../Pictures/logo.jpeg";

class Login extends Component {
  state = {};
  render() {
    return (
      <body>
        <form className="form-signin">
          <div className="text-center mb-4">
            <img className="logo" src={logo} alt="" width="200" height="200" />
            <h1 className="h3 mb-3 font-weight-normal">Bienvenido</h1>
          </div>

          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <label for="inputPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>
        </form>
      </body>
    );
  }
}
export default Login;
