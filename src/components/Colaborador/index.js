import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, equipo, picture, puesto,id, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;

    const colorP = {
        backgroundColor: colorPrimario,
    }

    //condicion

    return <section className="colaborador">
        <AiFillCloseCircle  onClick={() => eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={colorP}>
            <img src={picture} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
            
            
        </div>
    </section>
}
export default Colaborador;