import Ejercicios from './listaEjercicios';
import { 
  BrowserRouter as Router ,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import ComponentBlog from "./blog";
import Split from "./SplitApp";
import Calculator from "./temperatura";
import LoginControl from "./loginButtons";
import SideBar from './sidebar';
import Contador from './hooks/estadoContador';
import Personajes from './hooks/desestructuracionObjetos';
import Principal from './otrasPruebas/p1Formularios';

function App() {
  return (
    <Router>
      <div className="Container">
       <div className="App">      
        <NavLink to="/" className="btn btn-dark">Inicio</NavLink>
        {/* <SideBar/> */}
        <Routes>
                <Route path="/contador" element={<Contador/>}></Route>
                <Route path="/ejercicio-1" element={<ComponentBlog/>}></Route>
                <Route path="/ejercicio-2" element={<Split/>}></Route>
                <Route path="/ejercicio-3" element={<Calculator/>}></Route>
                <Route path="/ejercicio-4" element={<LoginControl/>}></Route>
                  <Route path="/personajes" element={<Personajes/> } ></Route>
                  <Route path="/p1Formularios" element={<Principal/>}></Route>
                <Route path="/" exact element={<Ejercicios>  
                    <NavLink to ="/contador"  className = "btn btn-dark">Contador</NavLink>
                    <NavLink to="/ejercicio-1"  className="btn btn-dark">Saludo</NavLink>
                    <NavLink to="/ejercicio-2"  className="btn btn-dark">Registro Input y Alert</NavLink>
                    <NavLink to="/ejercicio-3"  className="btn btn-dark"> Temp °C - °K</NavLink>
                    <NavLink to="/ejercicio-4"  className="btn btn-dark">Sign up</NavLink>
                    <NavLink to="/personajes"   className="btn btn-dark">Personajes React-Firebase</NavLink>
                    <NavLink to="p1Formularios" className="btn btn-dark">Formularios</NavLink>
                </Ejercicios>}>
                </Route>
        </Routes>
       </div>
    </div>
    </Router>    
  );
}
export default App;
