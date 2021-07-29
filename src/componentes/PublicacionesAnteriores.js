import React, {useState, useEffect } from "react";
import ContAnteriores from "./Tarjetas/ContAnteriores";

import { getData } from "gespro-utils/akiri";

import config from "../config.json";

/* URL API */
const API_URL = config.apiDev;
var publicaciones = null;

export default function PublicacionesAnteriores() {

  const [cargado, setCargado] = useState(false);
  
  async function asyncCallData() {
    // carga de los JSON de los selects
    let url = API_URL + "consulta_revistas.php";
    await getData(url).then((respuesta) => {
       publicaciones = respuesta;
      console.log("publicaciones", publicaciones);
      setCargado(true);
    });
  }

  useEffect(() => {
    asyncCallData();
  }, []);

  
  return (
    <div className="container-fluid mt-4">
      {cargado ? (
        // <p>Publicaciones Anteriores</p>
        <ContAnteriores array={publicaciones} />           
        ) : (
          <h4>
            Cargando datos <span className="spinner-grow"></span>
          </h4>
        )
      }
    </div>
  );
}
