import React, {Component} from 'react';
import '../CSS/login.css';
import logo from '../Pictures/logo.jpeg';
import Home from './Home.jsx'
import ReactDOM from 'react-dom';

class Login extends Component
{
    state = {
    };

    handleLoginButton()
    {
      return ReactDOM.render(
        <Home/>, 
        document.getElementById('root')
    );
    }
    render()
    {
        return(
            <body>
                <div>
                    <img className = "logo" src = {logo} alt="Logo"></img>
                </div>
                <div>
                    <h2 className= "bienvenido">
                      ¡Bienvenido!  
                    </h2>
                </div>

                <div className= "login">
                    <form className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="inputEmail2" className="sr-only">Email</label>
                        <input type="text" className="form-control-plaintext" id="inputEmail2" placeholder="User"/>
                    </div>
                    
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" className="sr-only">Password</label>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
                    </div>
  
                    <button type="submit" className="btn btn-primary mb-2" onClick={this.handleLoginButton} >Login</button>
                    </form>
                </div>
                
            </body>
        )
    }
}
export default Login;