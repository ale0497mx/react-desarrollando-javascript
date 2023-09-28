import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {


    //ddestructuraccion
    const { colorPrimario, colorSecundario, titulo, id} = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

    const colorFondo = {
        background:  hexToRgba(colorPrimario, 0.2)
    }
    const estiloTitulo = {
        borderColor: colorPrimario,
    }


    return <> 
    {  /* usamos los   corchetes para que pueda funcionar la comparacion {}*/
        colaboradores.length > 0 && // aqui ocultamosso los elementos que sean mayor que 0 en este ccaso los que no tengan un numero ya que un arreglo contiene una cantidad n
        <section className="equipo" style={colorFondo}>
            <input 
                type="color" 
                className="input-color"
                value={colorPrimario}
                onChange={(event) => {actualizarColor(event.target.value, id)}}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
            
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                />)
            }
            </div>
        </section> 
    } 
    </>
}

export default Equipo;