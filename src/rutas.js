import { Fragment } from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
 } from "react-router-dom";
import App from "./App";
import ComponentBlog from "./blog";
import Ejercicios from "./listaEjercicios";

 export default function  Rutas(params) {
     return(
        <>
            <Router>
                <Routes path ="/Ejercicio1" component = {ComponentBlog}></Routes>
            </Router>
            <Ejercicios/>
        </>
     );
 }