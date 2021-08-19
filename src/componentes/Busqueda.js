import React, { useContext } from "react";

import GC from "../_complementos/Global.context";
import ContenidoPrincipal from "./ContenidoPrincipal";
import ContBuscador from "../componentes/Buscador/ContBuscador";

import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";

import { sendData } from "gespro-utils/akiri";
import config from "../config.json";
import { useState } from "react";

/* URL API */
const API_URL = config.apiDev;

export default function Busqueda() {
  const [espera, setEspera] = useState(false);
  const context = useContext(GC);
  var datos = context.dataArticulos;

  console.log("datos articulos", datos);


  const getDataForm = (data) => {
    // console.log("Datos a enviar al servidor", data);
    setEspera(true);
    data.correo2 === "" && delete data["correo2"];
    let url = API_URL + "enviar_datos_formulario.php";
    // console.log("url", url);
    // console.log("data", data);

    sendData(url, data).then((respuesta) => {
      // console.log("respuesta", respuesta);
      setEspera(false);
      if (!respuesta.error) {
        alertify
          .alert(
            "Aviso",
            "Los datos de su suscripción han sido enviados exitosamente, un correo de confirmación ha sido enviado"
          )
          .set("onok", function (closeEvent) {
            context.setComponente(<ContenidoPrincipal />);
          });
      } else {
        let msjServer;
        if (respuesta.error) {
          msjServer = respuesta.msj;
        } else {
          msjServer = "Problemas de conexión con la base de datos. Error 405";
        }
        alertify.alert("Error", msjServer);
      }
    });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center p-3">
        <div className="align-self-center">
          <h1 className="titulares-menu">Búsqueda</h1>
        </div>
        <hr />
      </div>
      {!espera ? (
        <div className="row m-2">
          <div className="col-12">
            < ContBuscador array = {datos} />
          </div>
        </div>
      ) : (
        <div className="row m-2">
          <div className="col-12">
            <h4>
              Enviando la solicitud. Por favor espere un momento
              <span className="spinner-grow"></span>
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}
