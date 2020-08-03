import React from "react";
import { Link } from "react-router-dom";

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
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/pacientes">
              Pacientes
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/terapeutas">
              Terapeutas
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/terapias">
              Terapias
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
