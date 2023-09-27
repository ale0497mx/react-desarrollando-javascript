import "./listaOpciones.css"

const ListaOpciones = (props) =>{
    //Metodo map -> arreglo.map( (equipo, index) =>{
// nosotros podemos retornar en este caso option y podemos trasformarlo
//})


    const manejarCambio = (e) => {
        console.log(e.target.value);
        props.setValor(e.target.value);
    }

    return  <div className="lista-opciones">
        <label htmlFor="">Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo} >{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;