import "./campoTexto.css"
import { useState } from "react"

const CampoTexto = (props) =>{
    const placeholderModificador = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.setValor(e.target.value );
    }   

    return <div className="campo-texto">
        <label htmlFor="">{props.titulo}</label>
        <input 
            
            placeholder={placeholderModificador} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}   

export default CampoTexto;