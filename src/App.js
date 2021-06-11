import React, { useState, useEffect, useContext } from "react";
// import GC from "./_complementos/Global.context";

import { getData } from "gespro-utils/akiri";

import Encabezado from "./componentes/Encabezado";
import Menu from "./componentes/Menu";
import ContenidoPrincipal from "./componentes/ContenidoPrincipal";
import PiePagina from "./componentes/PiePagina";
//  componentes menú
import InformacionGeneral from "./componentes/OpcionesInformacion";

function App() {
  var componenteMenu =  null;
  const [componente, setComponente] = useState(<ContenidoPrincipal />);
  const handlerClickOpcion = (e) => {
    console.log("opcion", e.currentTarget);
    (parseInt(e.currentTarget.name) === 5)
    ?setComponente(<ContenidoPrincipal/>)
    :setComponente(<InformacionGeneral opcion={parseInt(e.currentTarget.name)}/>);
  };

  return (
    <div>
      {/* <GC.Provider value={{ componente, setComponente }}> */}
        <Encabezado />
        <Menu opcion={handlerClickOpcion} />
        {componente}
        <PiePagina />
      {/* </GC.Provider> */}
    </div>
  );
}

export default App;
