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
      id: uuidv4(),
      equipo:"Front End",
      nombre:"Alejandro Resendiz",
      picture:"https://github.com/ale0497mx.png",
      puesto:"Instructor",
      fav: true,
      },
    {
      id: uuidv4(),
      equipo:"Programación",
      nombre:"Jose Resendiz",
      picture:"https://github.com/ale0497mx.png",
      puesto:"Instructor",
      fav: false,
      },
    {
      id: uuidv4(),
      equipo:"UX & Diseño",
      nombre:"Roberto Resendiz",
      picture:"https://github.com/ale0497mx.png",
      puesto:"Instructor",
      fav: false,
      },
    {
      id: uuidv4(),
      equipo:"Innovación y Gestión",
      nombre:"Tzintyusan Resendiz",
      picture:"https://github.com/ale0497mx.png",
      puesto:"Instructor",
      fav: false,
      },  
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },

    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      id: uuidv4(),
      titulo: "Data Sience",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX & Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
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
  const eliminarColaborador = (id) => {
    console.log("eliminado", id);
    // creamos una constante que es igual a nuestro arreglo colaboradores el ".filter" es un metodo
    // de los arreglos el cual recibira una funcion la cual recibe a cada uno e los colaboradores
    // lo que queremos es que rregrese aquel colaborador que en su llave sea diferente a la id que recibimos
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar Color
  const actualizarColor = (color, id) => {
    
    const equiposActualizado = equipos.map((equipo)=> {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }

      return equipo;
    })
    actualizarEquipos(equiposActualizado);
  }
  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4()}])
  }
  
  // Funcion de favoritos
  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })

    actualizarColaboradores(colaboradoresActualizados);
  }
  return (
    <div>
      <Header />
      { mostrarForm && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo )}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
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
          like={like}
        /> 
        )
      }
      <Footer />
    </div>
  );
}

export default App;
