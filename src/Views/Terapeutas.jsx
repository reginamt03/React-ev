import React, {Component} from 'react';
//import ReactDom from 'react-dom';
//import logo from '../Pictures/logo.jpeg'
import '../CSS/paciente.css'

class Paciente extends Component
{
    state = {

    };

    InputIsValid ()
    {
        let classes = "form-control";
        classes += this.state.count === 0 ? "is-valid" : "is-invalid";
        return classes;
    }
    
    render()
    {
        return (
            <body className="paciente-layout">
                <h1 className="header">PACIENTES</h1>
                    <form>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="nombrePaciente">Nombre</label>
                                <input type="text" className= "form-control is-valid"  id="nombrePaciente" placeholder="Andrea" required/>
                                {/* <div class="valid-feedback">
                                    Looks good!
                                </div> */}
                            </div>

                            <div className="form-group col-md-6 mb-3">
                                <label for="apPaterno">Apellido Paterno</label>
                                <input type="text" className="form-control is-valid" id="apPaterno" placeholder="Carrillo"/>
                            </div>

                            <div className="form-group col-md-6 mb-3">
                                <label for="apMaterno">Apellido Materno</label>
                                <input type="text" className="form-control is-valid" id="apMaterno" placeholder="Pérez"/>
                            </div>
                            
                            <div className="form-group col-md-6 mb-3">
                                <label for="telefono">Teléfono</label>
                                <input type="text" className="form-control is-valid" id="telefono" placeholder="3318925007"/>
                            </div>
                        </div>

                        <div className="form-row">

                            <div className="form-group col-md-6 mb-3">
                                <label for="fechaNaciemiento">Fecha de Nacimiento</label>
                                <input type="date" className="form-control is-valid" id="fechaNacimiento"/>
                            </div>

                            <div className="form-group col-md-6 mb-3">
                                <label for="fechaInscripción">Fecha de Inscripción</label>
                                <input type="date" className="form-control is-valid" id="fechaInscripcion"/>
                            </div>
                        </div> 

                        <div class="bd-example">
                            <button type="button" class="btn btn-outline-warning">Nuevo</button>
                            <button type="button" class="btn btn-outline-warning">Agregar</button>
                            <button type="button" class="btn btn-outline-warning">Modificar</button>
                            <button type="button" class="btn btn-outline-warning">Eliminar</button>
                        </div>  
                    </form>
                    <nav>
                        <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0">Search</button>
                        </form>
                    </nav>

                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th  className="" scope="col">ID</th>
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
            </body>
        );
    }
}
export default Paciente;