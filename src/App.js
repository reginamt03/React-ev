import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Pacientes from "./Components/pacientes";
import Login from "./Views/Login";
import Home from "./Views/Home";
import Terapeutas from "./Views/Terapeutas";
import Terapias from "./Views/Terapias";

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <div>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/pacientes" component={Pacientes} />
              <Route path="/terapeutas" component={Terapeutas} />
              <Route path="/login" exact component={Login} />
              <Route path="/terapias" component={Terapias} />
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
