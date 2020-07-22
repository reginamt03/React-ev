import React, { Component } from "react";
import "../CSS/paciente.css";
import NavBar from "../Components/NavBar";
import MainData from "../Components/MainData";
import MainTable from "../Components/MainTable";

class Paciente extends Component {
  render() {
    return (
      <body className="paciente-layout">
        <NavBar />
        <h1 className="header">PACIENTES</h1>
        <MainData />
        <MainTable />
      </body>
    );
  }
}
export default Paciente;
