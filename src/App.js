import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header/head.js';
import Formulario from './components/Formulario/formulario.js';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
function App() {
  const [mostrarForm, actualizarMostrar ] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
    equipo:"Front End",
    nombre:"Alejandro Resendiz",
    picture:"https://github.com/ale0497mx.png",
    puesto:"Instructor", 
      },
    {
    equipo:"Programación",
    nombre:"Jose Resendiz",
    picture:"https://github.com/ale0497mx.png",
    puesto:"Instructor", 
      },
    {
    equipo:"UX & Diseño",
    nombre:"Roberto Resendiz",
    picture:"https://github.com/ale0497mx.png",
    puesto:"Instructor", 
      },
    {
    equipo:"Innovación y Gestión",
    nombre:"Tzintyusan Resendiz",
    picture:"https://github.com/ale0497mx.png",
    puesto:"Instructor", 
      },  
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },

    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      titulo: "Data Sience",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX & Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  // ternario --->  condicion ? la idea es tener una coddicion
  // y nosotros usar su simbolo  condicion ? se muestra : no se muestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  }
  //Resgitrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Registrando colaborador", colaborador);
    // Spred operator cuando veamos tres puntos : "..." esto quiere decir que estamoss copieando algo
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  // Eliminar colaboradores
  const eliminarColaborador = () => {
    console.log("eliminado");
  }

  // Actualizar Color
  const actualizarColor = (color, titulo) => {
    const equiposActualizado = equipos.map((equipo)=> {
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color;
      }

      return equipo;
    })
    actualizarEquipos(equiposActualizado);
  }
  // Lista de equipos
  

  return (
    <div>
      <Header />
      { mostrarForm && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo )}
          registrarColaborador={registrarColaborador}
          /> 
        }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        /> 
        )
      }
      <Footer />
    </div>
  );
}

export default App;
