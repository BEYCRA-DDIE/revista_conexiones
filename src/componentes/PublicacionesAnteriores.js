import React, { useContext, useState, useEffect } from "react";
import Articulos from "./Articulos";
import ContAnteriores from "./Tarjetas/ContAnteriores";

import GC from "../_complementos/Global.context";

import { getData } from "gespro-utils/akiri";
import { filtrarKey } from "gespro-utils/filtrar_array";

import config from "../config.json";


/* URL API */
const API_URL = config.apiDev;
var publicaciones = null;

export default function PublicacionesAnteriores() {
  window.gtag('config', 'G-R4JLPNE7SH', {
    'page_title' : 'Publicaciones Anteriores',
    'page_path': '/publicacionesanteriores/articulos'
  });
  const [cargado, setCargado] = useState(false);
   const context = useContext(GC);
  
  async function asyncCallData() {
    let url = API_URL + "consulta_revistas.php";
    await getData(url).then((respuesta) => {
       publicaciones = respuesta;
      // console.log("publicaciones", publicaciones);
      setCargado(true);
    });
  }

   useEffect(() => {
    asyncCallData();
  }, []);

  const handlerClickElemento = (item) => { 
    let arrayRevista = filtrarKey(publicaciones, "id", item.target.id);
    let revista = arrayRevista[0];
     context.setComponente(<Articulos actual = {false} revista = {revista} />) 
   };

  
  return (
    <div className="container-fluid mt-4">
      {cargado ? (
          <ContAnteriores array={publicaciones} handlerClickElemento= {handlerClickElemento}/>      
      )
      : (
          <h4>
            Cargando datos <span className="spinner-grow"></span>
          </h4>
        )
      }
    </div>
  );
}
