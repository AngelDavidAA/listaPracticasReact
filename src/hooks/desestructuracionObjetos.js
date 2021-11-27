import {firebase} from './firebaseConf';
import React, {useEffect, useState} from 'react';
import Formularios from '../formularios/formPersonajes';

export default function Personajes(){
    const[prj, setPrj] = useState([])
    const [form, setform] = useState(false);
    const [formEdit, setFormEdit] = useState();

    const [tipoBtn, setTipoBtn] = useState("");
    const[mostrarFormEdit,setMostrarFormEdit]= useState(false);
    
    const handleUpdateBtn = (elem)=> {
        setform(false)
        setTipoBtn("Edit")
        setMostrarFormEdit(true)   
        console.log(elem)
        setFormEdit(elem)
    }

    const handleAddButton = () =>{
        setMostrarFormEdit(false)   
        setTipoBtn("Agregar")   
        setform(true)
    }

    const obtenerDatos = async () =>{
        try {
            const db = firebase.firestore()
            const data = await db.collection('01-femaleCharacters').get()
            const arrayData = data.docs.map( doc => ({
                id: doc.id, ...doc.data()
            }))
            // console.log(arrayData)
            setPrj(arrayData);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{            
        obtenerDatos()
    }, [])

    
    return(
        <div>
            <div className ="container mt-2 mb-5">
                <h1>Beautis of Anime and Comics</h1>
                <button 
                    onClick = {() => {handleAddButton()}}
                    className="btn btn-success" 
                >+</button>
                <div className="row row-cols-1 row-cols-md-6 g-4">
                    {prj.map(elem =>{
                        return(
                        <div className="col" key = {elem.id}>
                            <div className="card h-100">
                                    <img src={elem.img} className="card-img-top"   alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{elem.displayName}</h5>
                                        <small className="card-text">{elem.Anime}</small>                                    
                                    </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-danger">Erase</button>
                                </div>
                                <div className="col">
                                    <button 
                                        onClick = {() => {handleUpdateBtn(elem)}}
                                        className="btn btn-primary"
                                    >Edit</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        )
                    }

                    )}
                </div>
            </div> 
                { form ? <Formularios tipo ={tipoBtn}  est = {obtenerDatos} dbFire = {firebase.firestore()} /> : null}
                  {mostrarFormEdit ? <Formularios tipo= {tipoBtn} objPrj ={formEdit} /> : null }  
        </div>
    )
}