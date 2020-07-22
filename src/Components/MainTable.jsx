import React, { Component } from "react";

class MainTable extends Component {
  render() {
    return (
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
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>López</td>
            <td>3328933822</td>
            <td>25/02/94</td>
            <td>7/07/2020</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jorge</td>
            <td>Casales</td>
            <td>López</td>
            <td>3328933822</td>
            <td>25/02/94</td>
            <td>7/07/2020</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Benito</td>
            <td>Ramirez</td>
            <td>Pedregal</td>
            <td>3328933822</td>
            <td>25/02/94</td>
            <td>7/07/2020</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default MainTable;
