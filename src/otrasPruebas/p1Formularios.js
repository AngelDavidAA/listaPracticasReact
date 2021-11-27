import { useState } from "react";

export default function Principal() {
    return(
        <div className=" container mt-2 row">
            <div className="col">
                <button className="btn btn-primary m-2">Agregar</button>
                <button className="btn btn-primary m-2">Editar</button>
            </div>           
            <div className="col fondo" >
                <FormularioCRUD/>
            </div>           
        </div>
    )
}

function FormularioCRUD(props) {

   
   return(
    <form /*onSubmit= { e =>{handleSubmit(e)}}*/>
    <input 
        name = "anime"
        type = "text" 
        className="form-control mb-2"
        placeholder ='Ingrese anime'
        // value = {values.anime}
        // onChange = { e => {
        //     handleChange(e)
        // }}
    />
    <input 
        name = "displayName"
        type = "text" 
        className = "form-control mb-2"
        placeholder ='Ingrese alias'
        // value = {values.displayName}
        // onChange = { e => {
        //     handleChange(e)
        // }}
    />
    <input 
        name="firstName"
        type="text" 
        className="form-control mb-2"
        placeholder='Ingrese nombre'
        // value= {values.firstName}
        // onChange ={ e => {
        //     handleChange(e)
        // }}
    />
    <input 
        name="img"
        type="text" 
        className="form-control mb-2"
        placeholder='Ingrese  URL imagen'
        // value ={values.img}
        // onChange ={ e => {
        //     handleChange(e)
        // }}
    />
    <button 
        type='submit'
        className="btn btn-dark btn-block btn-sm"
    >
        {/* {props.tipo} */}
        Add
    </button>
</form>
   )
}