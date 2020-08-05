import React, { Component } from "react";
import "../CSS/paciente.css";
import NavBar from "../Components/NavBar";
import PacienteForm from "../Components/PacienteForm";
import PacientesTable from "../Components/PacientesTable";

class Paciente extends Component {
  state = {};

  InputIsValid() {
    let classes = "form-control";
    classes += this.state.count === 0 ? "is-valid" : "is-invalid";
    return classes;
  }

  render() {
    return (
      <body className="paciente-layout">
        <NavBar />
        <h1 className="header">TERAPEUTAS</h1>
        <PacienteForm />
        <PacientesTable />
      </body>
    );
  }
}
export default Paciente;
