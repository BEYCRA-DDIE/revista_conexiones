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
        <React.Fragment>
         {/* <p>Publicaciones Anteriores</p> */}
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
                          Editorial<br />
                          Articulos<br />
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
