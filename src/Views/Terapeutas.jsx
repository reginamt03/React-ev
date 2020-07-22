import React, { Component } from "react";
//import ReactDom from 'react-dom';
//import logo from '../Pictures/logo.jpeg'
import "../CSS/paciente.css";
import NavBar from "../Components/NavBar";
import MainData from "../Components/MainData";
import MainTable from "../Components/MainTable";

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
        <MainData />
        <MainTable />
      </body>
    );
  }
}
export default Paciente;
