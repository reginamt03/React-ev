import React, {Component} from 'react';
import '../CSS/home.css';
import Pacientes from './Pacientes.jsx';
import banner from '../Pictures/BannerFormat.jpg'
import ReactDOM from 'react-dom';

class Home extends Component 
{
    state = { classes: "btn btn-outline-success" };

    handleBtnPacientes()
    {
        return ReactDOM.render(
            <Pacientes/>, 
            document.getElementById('root')
        );
    }

    render()
    {
        return (
            <html className="home-layout">
                <body className="body-layout">
                    <div>
                        <div>
                            <img  className = "header-image" src = {banner} alt ="Main Header EquinoTerapia" title = "Header" />
                        </div>

                        <div className = "menu">
                            <div>
                                <button className= {this.state.classes} onClick={this.handleBtnPacientes}> Pacientes</button>
                                <button className= {this.state.classes}> Terapeutas</button>
                                <button className= {this.state.classes}> Sesiones de Trabajo</button>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

export default Home;