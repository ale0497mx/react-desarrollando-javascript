import "./listaOpciones.css"

const ListaOpciones = (props) =>{
    //Metodo map -> arreglo.map( (equipo, index) =>{
// nosotros podemos retornar en este caso option y podemos trasformarlo
//})

    const equipos = [
        
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX & UI",
        "Móvil",
        "Innovación y gestion"
    ]

    const manejarCambio = (e) => {
        console.log(e.target.value);
        props.setValor(e.target.value);
    }

    return  <div className="lista-opciones">
        <label htmlFor="">Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { equipos.map((equipo, index) => {
                return <option key={index} value={equipo} >{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;