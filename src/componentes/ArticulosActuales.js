import React, { useContext, useState } from "react";
import GC from "../_complementos/Global.context";

import { getData } from "gespro-utils/akiri";
import { filtrarKey} from "gespro-utils/filtrar_array";

import config from "../config.json";
import ContTarjetasArticulos from "./Tarjetas/ContTarjetasArticulos";

/* URL API */
const API_URL = config.apiDev;

var filtrados = null;

export default function ArticulosActuales() {
  const context = useContext(GC);
  const [cargado, setCargado] = useState(false);
  var datos = context.dataArticulos;


  // console.log("datos articulos em articulos actuales", datos);

  async function asyncCallDatas() {
    // carga de los JSON de los selects
    let url = API_URL + "consulta_ultima_revista.php";
    await getData(url).then((respuesta) => {
      const revistaActual = respuesta[0];
      // console.log("revista", revistaActual);
      const id = revistaActual.id;      
      // console.log("id", id);
      filtrados = filtrarKey(datos,"id_revista",id);
      setCargado(true);
      console.log("filtrados para enviar", filtrados);
    });
  }

  asyncCallDatas();

  return (
    <div className="container mt-4">
      <div className="row">
        <h1>Articulos</h1>
        {cargado &&
        <ContTarjetasArticulos array = {filtrados} />
        }
      </div>
    </div>
  );
}
