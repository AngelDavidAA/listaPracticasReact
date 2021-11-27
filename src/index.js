import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from "reactfire";
// import reactDom from 'react-dom';

// //estilos importaciones
// import './App.css';
// // import './index.css';

// //archivos personalizados
import App from './App';
import Ejercicios from './listaEjercicios';
import Saludos from './saludos';
// import App from './temporizador';
// import Toogle from './switch';
import LoginControl from './loginButtons';
import Page from './hideComponent';
import NumberList from './listKeys';
import ComponentBlog from './blog';
import NameForm from './form_InputSubmit';
import FlavorForm from './form_InputSubmit';
import Calculator from './temperatura';
import WelcomeDialog from './contencion';
// import App from './SplitApp';

import ListaProductos from './lista';
import Split from './SplitApp';
// import FilterableProductTable from './ProductsTable-App';

// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];
ReactDOM.render(

  <React.StrictMode>
    {
      // <App/>
      // <Saludos/>
      // <Clock/>
      // <Toogle/>
      // <LoginControl/>
      // <Page/>
      // <NumberList/>
        // <ComponentBlog/>
      // <NameForm/>
      // <FlavorForm/>
      // <Calculator/>
      // <WelcomeDialog />
    
      
 
          <App></App>
   
      // <ListaProductos/>
    //   <FilterableProductTable products={PRODUCTS} />
    // <Split/>
    } 
  </React.StrictMode>,
  document.getElementById('root')
);