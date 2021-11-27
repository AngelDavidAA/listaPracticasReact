function Saludar (props){
    return <h5> Hola {props.nombre}</h5>;
  }
  
  function Saludos (){
    return(
      <div>
        <Saludar nombre ="Karen"></Saludar>
        <Saludar nombre = "Angel"/>
        <Saludar nombre = "Doris"></Saludar>
        <Saludar nombre = "Lucia"/>
      </div>
    );
  }

  export default Saludos;