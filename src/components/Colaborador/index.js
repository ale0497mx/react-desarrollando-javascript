import "./Colaborador.css"
const Colaborador = (props) => {
    const { nombre, equipo, picture, puesto } = props.datos;
    const { colorPrimario } = props;

    const colorP = {
        backgroundColor: colorPrimario,
    }

    return <section className="colaborador">
        <div className="encabezado" style={colorP}>
            <img src={picture} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </section>
}
export default Colaborador;