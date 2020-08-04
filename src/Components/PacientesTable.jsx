import React, { Component } from "react";
import Table from "../Common/table";

class PacientesTable extends Component {
  columns = [
    {
      path: "IdPaciente",
      label: "Id",
    },
    { path: "Nombre", label: "Nombre" },

    { path: "ApellidoPaterno", label: "Apellido Paterno" },

    { path: "ApellidoMaterno", label: "Apellido Materno" },

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
