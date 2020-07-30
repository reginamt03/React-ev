import React, { Component } from "react";
import { getPacientes } from "./../Object/Paciente";

class MainTable extends Component {
  state = {
    pacientes: getPacientes(),
  };

  handleDelete = (paciente) => {
    const pacientes = this.state.pacientes.filter((p) => p.id !== paciente.id);
    this.setState({ pacientes });
  };

  render() {
    const { length: count } = this.state.pacientes;
    if (count === 0) return <p>No hay pacientes en la base de datos.</p>;
    return (
      <React.Fragment>
        <p>Mostrando {count} pacientes de la base de datos</p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th className="" scope="col">
                ID
              </th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido Paterno</th>
              <th scope="col">Apellido Materno</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Fecha de Nacimiento</th>
              <th scope="col">Fecha de Inscripción</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.state.pacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td>{paciente.id}</td>
                <td>{paciente.nombre}</td>
                <td>{paciente.apPaterno}</td>
                <td>{paciente.apMaterno}</td>
                <td>{paciente.telefono}</td>
                <td>{paciente.FechaNacimiento}</td>
                <td>{paciente.FechaInscripcion}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(paciente)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default MainTable;
