import React, { Component } from "react";
import Table from "../Common/table";
import { Link } from "react-router-dom";

class PacientesTable extends Component {
  columns = [
    {
      path: "IdPaciente",
      label: "Id",
    },
    {
      path: "Nombre",
      label: "Nombre",
      content: (paciente) => (
        <Link to={`/pacientes/new/${paciente.IdPaciente}`}>
          {paciente.Nombre}
        </Link>
      ),
    },

    { path: "ApellidoPaterno", label: "Apellido Paterno" },

    { path: "ApellidoMaterno", label: "Apellido Materno" },

    { path: "Telefono", label: "Teléfono" },

    { path: "FechaNacimiento", label: "Fecha Nacimiento" },

    { path: "FechaInscripcion", label: "Fecha Inscripcion" },

    {
      key: "delete",
      content: (paciente) => (
        <button
          onClick={() => this.props.onDelete(paciente)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { pacientes, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={pacientes}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default PacientesTable;
