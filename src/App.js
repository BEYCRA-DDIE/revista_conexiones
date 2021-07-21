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
var dataArticulos = null;
function App() {
  const [componente, setComponente] = useState(<ContenidoPrincipal/>);


  async function asyncCallDatas() {
  
    // carga de los JSON de los selects
    let  url = API_URL + "consulta_articulos.php";
    console.log("url", url);
    await getData(url)
    .then(respuesta => {
      // console.log("respuesta",respuesta);  
      dataArticulos = respuesta;
    });
  }
  useEffect(() => {
    asyncCallDatas();
  },[]);  

  return (
    <div>
       <GC.Provider value={{ componente, setComponente,dataArticulos}}> 
          <Encabezado />
          <Menu/>
          {componente}
          <PiePagina />
      </GC.Provider>
    </div>
  );
}

export default App;
