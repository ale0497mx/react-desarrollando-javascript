
import "./MiOrg.css"
import { useState } from "react";
const MiOrg = (props) => {
    //Estdos funcionalidad de react hooks
    //useState
    //useState Por que es una Funcion ?
    // const [nombreVariable, Funcion-que-actualiza] = useState("valor inicial");
    const [mostrar, actualizarMostrar] = useState(true);    

    // const manejarClick = (props) => {
    //     console.log("Ocultar/Mostrar elemento", !mostrar);
    //     actualizarMostrar(!mostrar);    
    // }


    return <section className="orgSection">
        <h3 className="title">Mi Organización </h3>
        <img src="../img/add.png" alt="" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;