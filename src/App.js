import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GC from "./_complementos/Global.context";

import routes from "./routes";

import { getData } from "gespro-utils/akiri";
import config from "./config.json";

//modulos
import Encabezado from "./componentes/Encabezado";
import Menu from "./componentes/Menu";
import ContenidoPrincipal from "./componentes/ContenidoPrincipal";
import PiePagina from "./componentes/PiePagina";

/* URL API */
const API_URL = config.apiDev;
var dataArticulos = null,
  dataAutores = null;

console.log("routes", routes);

const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    return (
      <Route
        path={prop.path}
        render={(props) => <prop.component {...props} />}
        key={key}
      />
    );
  });
};

function App() {
   const [componente, setComponente] = useState(<ContenidoPrincipal/>);
  // const [componente, setComponente] = useState(null);
  const [cargado, setCargado] = useState(false);

 

  function obtenerAutores(dataId) {
    let autores = [];
    dataAutores.forEach((element) => {
      if (parseInt(element.id_articulo) == parseInt(dataId)) {
        autores.push(element);
      }
    });
    return autores;
  }

  async function asyncCallDatas(cb) {
    // carga de los JSON de los selects
    let url = API_URL + "consulta_articulos.php";
    // console.log("url", url);
    await getData(url).then((respuesta) => {
      //  console.log("respuesta",respuesta);
      dataArticulos = respuesta;
    });
    url = API_URL + "consulta_autores.php";
    // console.log("url", url);
    await getData(url).then((respuesta) => {
      dataAutores = respuesta;
    });
    cb();
  }
  useEffect(() => {
    asyncCallDatas(function () {
      let array = dataArticulos;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.autores = obtenerAutores(element.id);
      }
      setCargado(true);
    });
  }, []);

  return (
    <div className="container">
      <Router>      

      {cargado ? (
        <GC.Provider value={{ componente, setComponente, dataArticulos }}>
          <Encabezado />
          <Menu />
          {routes.inicio}
          {componente}
          <PiePagina />
        </GC.Provider>
      ) : (
        <>
          <h4>
            Cargando datos <span className="spinner-grow"></span>
          </h4>
        </>
      )}
      <Switch>{getRoutes(routes)}</Switch>
      </Router>
    </div>
  );
}

export default App;
