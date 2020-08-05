import React from "react";
import Joi from "joi-browser";
import Form from "../Common/form";
import { saveTerapeuta, getTerapeuta } from "../Services/TerapeutaService";
import NavBar from "./NavBar";

class TerapeutaForm extends Form {
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
    idTerapeuta: Joi.number(),
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

  async populateTerapeuta() {
    try {
      const idTerapeuta = this.props.match.params.id;
      if (idTerapeuta === 0) return;

      const { data: terapeuta } = await getTerapeuta(idTerapeuta);
      this.setState({ data: this.mapToViewModel(terapeuta) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateTerapeuta();
  }

  mapToViewModel(terapeuta) {
    return {
      idTerapeuta: terapeuta.IdTerapeuta,
      nombre: terapeuta.Nombre,
      apellidoPaterno: terapeuta.ApellidoPaterno,
      apellidoMaterno: terapeuta.ApellidoMaterno,
      telefono: terapeuta.Telefono,
      fechaNacimiento: terapeuta.FechaNacimiento,
    };
  }

  doSubmit = async () => {
    await saveTerapeuta(this.state.data);
    alert("Terapeuta guardado exitosamente");

    this.props.history.push("/terapeutas");
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <h1>Terapeutas</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("nombre", "Nombre", "text")}
            {this.renderInput("apellidoPaterno", "Apellido Paterno", "text")}
            {this.renderInput("apellidoMaterno", "Apellido Materno", "text")}
            {this.renderInput("telefono", "Teléfono")}
            {this.renderCalendar("fechaNacimiento", "FechaNacimiento")}
            {this.renderButton("Save")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default TerapeutaForm;
