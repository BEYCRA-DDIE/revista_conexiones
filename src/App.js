import React, { useState, useEffect, useContext } from "react";
import GC from "./_complementos/Global.context";

import { getData } from "gespro-utils/akiri";
import config from './config.json';

//modulos
import Encabezado from "./componentes/Encabezado";
import Menu from "./componentes/Menu";
import ContenidoPrincipal from "./componentes/ContenidoPrincipal";
import PiePagina from "./componentes/PiePagina";

/* URL API */
const API_URL = config.apiDev;
var dataArticulos = null,
    dataAutores = null;

function App() {
  const [componente, setComponente] = useState(<ContenidoPrincipal/>);
  const [cargado, setCargado] = useState(false);

  function obtenerAutores(idArticulo) {
    let autores = [];
    dataAutores.forEach(element => {
      if (element.id_articulo == idArticulo) {
        autores.push(element);
      }
    };
    return autores
  };

  async function asyncCallDatas() {
  
    // carga de los JSON de los selects
    let  url = API_URL + "consulta_articulos.php";
    console.log("url", url);
    await getData(url)
    .then(respuesta => {
       console.log("respuesta",respuesta);  
      dataArticulos = respuesta;
      // setCargado(true);
    });
    url = API_URL + "consulta_autores.php";
    console.log("url", url);
    await getData(url)
    .then(respuesta => {
       console.log("respuesta",respuesta);  
      dataAutores = respuesta;
      // setCargado(true);
    });
    dataArticulos.forEach(element => {
      dataArticulos.autores = obtenerAutores($dataArticulos.id);
    });
  }
  useEffect(() => {
    asyncCallDatas();
  },[]);  

  return (
    <div className= "container">
       {cargado ? (
          <GC.Provider value={{ componente, setComponente,dataArticulos}}> 
              <Encabezado />
              <Menu/>
              {/* {componente} */}
              <PiePagina />
          </GC.Provider>
      ) : (
        <>
          <h4>
            Cargando datos <span className="spinner-grow"></span>
          </h4>
        </>      
      )}
    </div>
  );
}

export default App;
