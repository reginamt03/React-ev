import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Views/Login.jsx';
import './CSS/index.css';

ReactDOM.render(
    <Login/>, 
    document.getElementById('root')
);

serviceWorker.unregister();