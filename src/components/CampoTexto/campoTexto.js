import "./campoTexto.css"

const CampoTexto = (props) =>{

    const placeholderModificador = `${props.placeholder}...`
    return <div className="campo-texto">
        <label htmlFor="">{props.titulo}</label>
        <input type="text" placeholder={placeholderModificador} />
    </div>
}   

export default CampoTexto;