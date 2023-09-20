import "./formulario.css";
import CampoTexto from "../CampoTexto/campoTexto.js";
import ListaOpciones from "../listaOpciones/listaOpciones";
import BotonCrear from "../Boton/BotonCrear";
const Formulario = () => {

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("manejar envio", event);
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace o foto"/>
            <ListaOpciones />
            <BotonCrear titulo="Crear"/>
        </form>
    </section>
}

export default Formulario;