import React, { useContext, useState, useEffect } from "react";
import ContGModal from "./Modal/ContGModal";
import Articulos from "./Articulos";

import GC from "../_complementos/Global.context";

import { getData } from "gespro-utils/akiri";
import { filtrarKey } from "gespro-utils/filtrar_array";

import config from "../config.json";


/* URL API */
const API_URL = config.apiDev;
var publicaciones = null;

export default function PublicacionesAnteriores() {

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
    context.setComponente(<Articulos actual = {false} id = {"1"}  revista = {revista} />) 
  };

  
  return (
    <div className="container-fluid mt-4">
      {cargado ? (
        <React.Fragment>
        <div className="row">
        {publicaciones.map((item, i) => (
            <div key={"tarjetaColumna" + i} className="col-sm-3 mb-4">
              <img
              src={ item.imagen}
              className="img-rounded"
              alt={"imagen previa de"}/> 
               <p>{item.numero}° cuatrimestre {item.anno}<br />
                      Volumen: {item.volumen} <br />
                      {
                        (item.articulos !== "0") && (
                        <>
                          <button type="button" name="editorial" id = {item.id} className="btn btn-link" onClick= {handlerClickElemento}>Editorial</button><br />
                          {/* Articulos<br /> */}
                          {/* <button type="button" class="btn btn-link">Link</button> */}
                          <button type="button" name= "articulos" id = {item.id} className="btn btn-link" onClick= {handlerClickElemento}>Artículos</button><br />
                          
                        </>
                      )}
                      <a href= {item.url_revista} target="_blank">Revista completa</a>
                </p>
            </div>
        ))
        }
        </div>
        </React.Fragment>
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
