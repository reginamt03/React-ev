import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Pacientes from "./Components/pacientes";
import Home from "./Views/Home";
import Terapeutas from "./Components/terapeutas";
import Terapias from "./Views/Terapias";
import LoginForm from "./Components/loginForm";
import PacienteForm from "./Components/PacienteForm";
import TerapeutaForm from "./Components/TerapeutaForm";

class App extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <div>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/pacientes/new/:id" component={PacienteForm} />
              <Route path="/pacientes" component={Pacientes} />
              <Route path="/terapeutas/new/:id" component={TerapeutaForm} />
              <Route path="/terapeutas" component={Terapeutas} />
              <Route path="/terapias" component={Terapias} />
              <Route path="/login" exact component={LoginForm} />
              <Redirect from="/" exact to="/login" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
