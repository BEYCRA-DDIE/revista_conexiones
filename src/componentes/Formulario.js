import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';

import GC from "../_complementos/Global.context";
import ContenidoPrincipal from "./ContenidoPrincipal";
import ContForm from "./Form/ContForm";
import { sendData } from 'gespro-utils/akiri';
import config from "../config.json";

/* URL API */
const API_URL = config.apiDev;

export default function Formulario() {
  const context = useContext(GC);

  const getDataForm = (data) => {

    console.log("Datos a enviar al servidor", data);
    // setEspera(true);
    let  url = API_URL + "agrega_suscriptor.php";
    // console.log("url", url);
    // console.log("data", data);
    
    sendData(url, data)
      .then(respuesta => {
        // setEspera(false);
      if (!respuesta.error) {
        // setEspera(false)
        // setRespuesta(null);
        alertify.alert('Aviso', 'Los datos de su suscripción han sido enviados exitosamente, te estaremos contactando')
          .set('onok',
            function (closeEvent) {
              context.setComponente(<ContenidoPrincipal/>);
            }
          )
      }
      else {
        let msjServer;
        if (respuesta.error) {
          msjServer = respuesta.msj;
        }
        else {
          msjServer = "Problemas de conexión con la base de datos. Error 405"
        }
        alertify.alert("Error", msjServer);
      };
    })

  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center p-3">
        <div className="align-self-center">
          <h1 className="titulares-menu">Formulario de suscripción</h1>
        </div>
        <hr />
      </div>
      <div className="row m-2">
        <div className="col-12">
          <ContForm getDataForm={getDataForm} />
        </div>
      </div>
    </div>
  );
}
