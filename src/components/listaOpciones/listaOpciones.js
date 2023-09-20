import "./listaOpciones.css"

const ListaOpciones = () =>{
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
    ]
    return  <div className="lista-opciones">
        <label htmlFor="">Equipos</label>
        <select name="" id="">
            { equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;