import React, { Component } from "react";

const getPacientes = () => {
  var datos;
  setTimeout(() => {
    fetch("https://localhost:44333/api/Paciente")
      .then((res) => res.json())
      .then((data) => {
        console.log("then", data);
        datos = data;
        console.log("datos", datos);
      });
  }, 1000);
  return datos;
};

function deletePaciente(id) {
  console.log("id", id);
  const deleteOption = {
    method: "DELETE",
  };
  fetch(`https://localhost:44333/api/Paciente/${id}`, deleteOption)
    .then((response) => response.json())
    .then(() => {
      return "true";
    });
}

class MainTable extends Component {
  state = {
    pacientes: [
      {
        IdPaciente: Number,
        Nombre: Text,
        ApellidoPaterno: Text,
        ApellidoMaterno: Text,
        Telefono: Text,
        FechaNacimiento: Date,
        FechaInscripcion: Date,
      },
    ],
  };

  componentWillMount() {
    fetch("https://localhost:44333/api/Paciente")
      .then((res) => res.json())
      .then((data) => {
        console.log("then", data);
        this.setState({ pacientes: data });
      });
  }

  handleDelete = (paciente) => {
    const pacientes = this.state.pacientes.filter(
      (p) => p.IdPaciente !== paciente.IdPaciente
    );

    console.log("delete data", paciente.IdPaciente);
    deletePaciente(paciente.IdPaciente);
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
              <tr key={paciente.IdPaciente}>
                <td>{paciente.IdPaciente}</td>
                <td>{paciente.Nombre}</td>
                <td>{paciente.ApellidoPaterno}</td>
                <td>{paciente.ApellidoMaterno}</td>
                <td>{paciente.Telefono}</td>
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
