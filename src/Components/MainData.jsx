import React, { Component } from "react";

class MainData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  InputIsValid() {
    let classes = "form-control";
    classes += this.state.count === 0 ? "is-valid" : "is-invalid";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="nombrePaciente">Nombre</label>
            <input
              type="text"
              className="form-control is-valid"
              id="nombrePaciente"
              placeholder="Andrea"
              required
            />
          </div>

          <div className="form-group col-md-6 mb-3">
            <label for="apPaterno">Apellido Paterno</label>
            <input
              type="text"
              className="form-control is-valid"
              id="apPaterno"
              placeholder="Carrillo"
            />
          </div>

          <div className="form-group col-md-6 mb-3">
            <label for="apMaterno">Apellido Materno</label>
            <input
              type="text"
              className="form-control is-valid"
              id="apMaterno"
              placeholder="Pérez"
            />
          </div>

          <div className="form-group col-md-6 mb-3">
            <label for="telefono">Teléfono</label>
            <input
              type="text"
              className="form-control is-valid"
              id="telefono"
              placeholder="3318925007"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6 mb-3">
            <label for="fechaNaciemiento">Fecha de Nacimiento</label>
            <input
              type="date"
              className="form-control is-valid"
              id="fechaNacimiento"
            />
          </div>

          <div className="form-group col-md-6 mb-3">
            <label for="fechaInscripción">Fecha de Inscripción</label>
            <input
              type="date"
              className="form-control is-valid"
              id="fechaInscripcion"
            />
          </div>
        </div>

        <div class="bd-example">
          <button type="button" class="btn btn-outline-warning">
            Nuevo
          </button>
          <button type="button" class="btn btn-outline-warning">
            Agregar
          </button>
          <button type="button" class="btn btn-outline-warning">
            Modificar
          </button>
          <button type="button" class="btn btn-outline-warning">
            Eliminar
          </button>
        </div>

        <nav>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0">
              Search
            </button>
          </form>
        </nav>
      </React.Fragment>
    );
  }
}

export default MainData;
