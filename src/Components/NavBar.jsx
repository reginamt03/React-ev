import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        Entre-Verde
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" to="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/pacientes">
            Pacientes
          </NavLink>
          <NavLink className="nav-item nav-link" to="/terapeutas">
            Terapeutas
          </NavLink>
          <NavLink className="nav-item nav-link" to="/terapias">
            Terapias
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
