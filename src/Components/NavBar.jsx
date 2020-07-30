import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/home">
        Entre-Verde
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/home">
              Home
              <span class="sr-only">(current)</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/pacientes">
              Pacientes
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/terapeutas">
              Terapeutas
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/terapias">
              Terapias
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
