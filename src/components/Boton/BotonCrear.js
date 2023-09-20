import "./BotonCrear.css"
const BotonCrear = (props) => {
    return (
        <div className="boton-crear">
            <button>{props.titulo}</button>
        </div>
    )
}

export default BotonCrear;