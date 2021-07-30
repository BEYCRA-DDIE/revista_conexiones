import React, { useContext, useState, useEffect } from "react";
import ContGModal from "./Modal/ContGModal";

//componentes
import ContTarjetasArticulos from "./Tarjetas/ContTarjetasArticulos";

import GC from "../_complementos/Global.context";

import { getData } from "gespro-utils/akiri";
import { filtrarKey } from "gespro-utils/filtrar_array";

import config from "../config.json";



/* URL API */
const API_URL = config.apiDev;

var filtrados = null,
revista = null,
meses = ["","Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];

export default function ArticulosActuales() {
  const context = useContext(GC);
  const [cargado, setCargado] = useState(false);
  const [verEditorial, setVerEditorial] = useState(false);
  var datos = context.dataArticulos;

  // console.log("datos articulos em articulos actuales", datos);

  async function asyncCallDatas() {
    // carga de los JSON de los selects
    let url = API_URL + "consulta_ultima_revista.php";
    await getData(url).then((respuesta) => {
      revista = respuesta[0];
      console.log("revista", revista);
      const id = revista.id;
      // console.log("id", id);
      filtrados = filtrarKey(datos, "id_revista", id);
      setCargado(true);
      //  console.log("filtrados para enviar", filtrados);
    });
  }

  useEffect(() => {
    asyncCallDatas();
  }, []);

  
  const handlerClickButton = () => {
    setVerEditorial(true);
  };

  return (
    <div className="container-fluid mt-4">
      {cargado ? (
          <React.Fragment>
          <div className="row">
          <div className="col-12">
                <ContGModal
                  textoboton = "Ver Editorial"
                  titulo="Editorial"
                  data= {1}
                />
              </div>
            </div> 
          <h1>{revista.nombre} </h1>
          <h2>Volumen {revista.volumen}, número  {revista.numero} - {meses[revista.mes]} - ISSN {revista.issn}</h2>
          <ContTarjetasArticulos array={filtrados} />
          </React.Fragment>    
        ) : (
          <h4>
            Cargando datos <span className="spinner-grow"></span>
          </h4>
        )
      }
    </div>
  );
}
