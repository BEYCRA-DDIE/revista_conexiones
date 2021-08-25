import React, { useContext,useEffect } from "react";
import { useForm } from "react-hook-form";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";

import GC from "../_complementos/Global.context";
import ContenidoPrincipal from "./ContenidoPrincipal";
import ContForm from "./Form/ContForm";
import { sendData } from "gespro-utils/akiri";
import config from "../config.json";
import { useState } from "react";

/* URL API */
const API_URL = config.apiDev;

export default function Formulario() {
  
  window.gtag('config', 'G-R4JLPNE7SH', {
    'page_title' : 'formulario',
    'page_path': '/formulario'
  });

  const [espera, setEspera] = useState(false);
  const context = useContext(GC);

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
        // Sends the event to Google Analytics and
  // resubmits the form once the hit is done.
  window.gtag('event', 'envio_formulario_suscripcion');
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
  useEffect(() => {
  //   window.gtag("event", "login", {
  //     event_category: "access",
  //     event_label: "login"
  // });
  // window.gtag('config', 'G-R4JLPNE7SH', {
  //     'page_title' : 'formulario',
  //     'page_path': '/formulario'
  //   });
  }, []);


  return (
    <div className="container">
      <div className="d-flex justify-content-center p-3">
        <div className="align-self-center">
          <h1 className="titulares-menu">Formulario de suscripción</h1>
        </div>
        <hr />
      </div>
      {!espera ? (
        <div className="row m-2">
          <div className="col-12">
            <ContForm getDataForm={getDataForm} />
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
