import { useState } from "react";
import "./formulario.css";
import Campo from "../Campo/campoTexto";
import ListaOpciones from "../listaOpciones/listaOpciones";
import BotonCrear from "../Boton/BotonCrear";
const Formulario = (props) => {
    /*<----- varaibles del form colaborador ----->*/ 
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [picture, setPicture] = useState("");
    const [equipo, setEquipo] = useState("");

    /*<----- varaibles del form equipo ----->*/ 
    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const {registrarColaborador, crearEquipo} = props; 

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
    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color})
    }
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValor={setNombre}
                />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                setValor={setPuesto}
                />
            <Campo 
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
        <form onSubmit={manejarNuevoEquipo} >
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo de equipo" 
                required 
                valor={titulo} 
                setValor={setTitulo}
                />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar color en Hex: ejemplo #FFFFFF" 
                required
                valor={color}
                setValor={setColor}
                type="color"
                />
            <BotonCrear titulo="Registrar equipo"/>
            </form>
            
    </section>
}

export default Formulario;