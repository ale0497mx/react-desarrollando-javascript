import "./campo.css"
import { useState } from "react"

const CampoTexto = (props) =>{
    const placeholderModificador = `${props.placeholder}...`
    const { type = "text" } = props;

    const manejarCambio = (e) => {
        props.setValor(e.target.value );
    }   

    return <div className={`campo campo-${type}`}>
        <label htmlFor="">{props.titulo}</label>
        <input 
            placeholder={placeholderModificador} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}   

export default CampoTexto;