
import { React } from "react";
import './index.css';    
import './App.css';
import logo from './logo.svg';

function Ejercicios(props) {
    return(
            <header className="App-header">
            <p>
              Navega por el sitio y mira los proyectos de prueba de REACT.
            </p>
            <img src={logo} className="App-logo" alt="logo" />
            {props.children}
            </header>
        );
}
export default Ejercicios;  