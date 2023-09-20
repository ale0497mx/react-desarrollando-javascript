import { useState } from 'react';
import './App.css';
import Header from './components/Header/head.js';
import Formulario from './components/Formulario/formulario.js';
import MiOrg from './components/MiOrg';
function App() {
  const [mostrarForm, actualizarMostrar ] = useState(true);

  // ternario --->  condicion ? la idea es tener una coddicion
  // y nosotros usar su simbolo  condicion ? se muestra : no se muestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm);
  }

  return (
    <div>
      <Header />
      { mostrarForm === true ? <Formulario /> : <></> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
