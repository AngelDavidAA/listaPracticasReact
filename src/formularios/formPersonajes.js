import React, { useState,useEffect } from "react";

export default function Formularios(props) {

    const[values, setValues] = useState({
        anime: '',
        displayName: '',
        firstName: '',
        img: ''
    })

    // if(props.tipo =="Edit"){
    //     values.anime = props.objPrj.Anime
    //     values.displayName = props.objPrj.displayName
    //     values.firstName = props.objPrj.firstName
    //     values.img = props.objPrj.img
    // }
    const handleChange = (e)=>{
        const {name, value}  = e.target
        setValues({
           ...values, [name]: value
        })
    }

        const handleSubmit = (e) =>{
            e.preventDefault()
            try {
                props.dbFire.collection("01-femaleCharacters").add(
                    {
                        Anime: values.anime,
                        displayName : values.displayName,
                        firstName: values.firstName,
                        img: values.img
                    }
                )
                props.est();
            } catch (error) {
                console.error(error)
            }
            console.log(values)

        }
    return(
        <form onSubmit= { e =>{handleSubmit(e)}}>
            <input 
                name = "anime"
                type = "text" 
                className="form-control mb-2"
                placeholder ='Ingrese anime'
                value = {values.anime}
                onChange = { e => {
                    handleChange(e)
                }}
            />
            <input 
                name = "displayName"
                type = "text" 
                className = "form-control mb-2"
                placeholder ='Ingrese alias'
                value = {values.displayName}
                onChange = { e => {
                    handleChange(e)
                }}
            />
            <input 
                name="firstName"
                type="text" 
                className="form-control mb-2"
                placeholder='Ingrese nombre'
                value= {values.firstName}
                onChange ={ e => {
                    handleChange(e)
                }}
            />
            <input 
                name="img"
                type="text" 
                className="form-control mb-2"
                placeholder='Ingrese  URL imagen'
                value ={values.img}
                onChange ={ e => {
                    handleChange(e)
                }}
            />
            <button 
                type='submit'
                className="btn btn-dark btn-block btn-sm"
            >
                {props.tipo}
            </button>
        </form>
    )
}