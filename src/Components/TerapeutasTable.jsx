import React, { Component } from "react";
import Table from "../Common/table";
import { Link } from "react-router-dom";

class TerapeutasTable extends Component {
  columns = [
    {
      path: "IdTerapeuta",
      label: "Id",
    },
    {
      path: "Nombre",
      label: "Nombre",
      content: (terapeuta) => (
        <Link to={`/terapeutas/new/${terapeuta.IdTerapeuta}`}>
          {terapeuta.Nombre}
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
      content: (terapeuta) => (
        <button
          onClick={() => this.props.onDelete(terapeuta)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { terapeutas, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={terapeutas}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default TerapeutasTable;
