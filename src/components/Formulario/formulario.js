import { useState } from "react";
import "./formulario.css";
import CampoTexto from "../CampoTexto/campoTexto.js";
import ListaOpciones from "../listaOpciones/listaOpciones";
import BotonCrear from "../Boton/BotonCrear";
const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [picture, setPicture] = useState("");
    const [equipo, setEquipo] = useState("");

    const {registrarColaborador,} = props; 

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("manejar envio");
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            picture: picture,
            equipo
        }
        props.registrarColaborador(datosAEnviar);
    }
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValor={setNombre}
                />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                setValor={setPuesto}
                />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace o foto" 
                required
                valor={picture}
                setValor={setPicture}
                />
            <ListaOpciones 
            valor={equipo}
            setValor={setEquipo}
            equipos = {props.equipos}
            />
            <BotonCrear titulo="Crear"/>
        </form>
    </section>
}

export default Formulario;