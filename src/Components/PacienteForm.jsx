import React from "react";
import Joi from "joi-browser";
import Form from "../Common/form";
import { savePaciente, getPaciente } from "./../Services/PacienteService";

class PacienteForm extends Form {
  state = {
    data: {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      telefono: "",
      fechaNacimiento: "",
    },
    errors: {},
  };

  schema = {
    nombre: Joi.string().required().label("Nombre"),
    apellidoPaterno: Joi.string().required().label("Apellido Paterno"),
    apellidoMaterno: Joi.string().required().label("Apellido Materno"),
    telefono: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/)
      .required()
      .label("Telefono"),
    fechaNacimiento: Joi.date().required().label("Fecha de Nacimiento"),
  };

  async populatePaciente() {
    try {
      const idPaciente = this.props.match.params.id;
      if (idPaciente === "new") return;

      const { data: paciente } = await getPaciente(idPaciente);
      this.setState({ data: this.mapToViewModel(paciente) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populatePaciente();
  }

  mapToViewModel(paciente) {
    return {
      IdPaciente: paciente.IdPaciente,
      nombre: paciente.nombre,
      apellidoPaterno: paciente.apellidoPaterno,
      apellidoMaterno: paciente.apellidoMaterno,
      telefono: paciente.telefono,
      fechaNacimiento: paciente.fechaNacimiento,
    };
  }

  doSubmit = async () => {
    await savePaciente(this.state.data);

    this.props.history.push("/paciente");
  };

  render() {
    return (
      <div>
        <h1>Pacientes</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("nombre", "Nombre", "text")}
          {this.renderInput("apellidoPaterno", "Apellido Paterno", "text")}
          {this.renderInput("apellidoMaterno", "Apellido Materno", "text")}
          {this.renderInput("telefono", "Teléfono")}
          {this.renderCalendar("fechaNacimiento", "FechaNacimiento")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default PacienteForm;
