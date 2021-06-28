import React, { useState, useEffect, useContext } from "react";
import GC from "./_complementos/Global.context";

import { getData } from "gespro-utils/akiri";

import Encabezado from "./componentes/Encabezado";
import Menu from "./componentes/Menu";
import ContenidoPrincipal from "./componentes/ContenidoPrincipal";
import PiePagina from "./componentes/PiePagina";

//  componentes menú
import OpcionesInformacion from "./componentes/OpcionesInformacion";

// opciones de la tarjeta
import Catalogo from "./componentes/Catalogo";



function App() {
  const [componente, setComponente] = useState(<ContenidoPrincipal/>);
  return (
    <div>
       <GC.Provider value={{ componente, setComponente }}> 
          <Encabezado />
          <Menu/>
          {componente}
          <PiePagina />
      </GC.Provider>
    </div>
  );
}

export default App;
