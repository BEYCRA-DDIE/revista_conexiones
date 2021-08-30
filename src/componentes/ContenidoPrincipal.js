import React, { useContext } from "react";
import GC from "../_complementos/Global.context";

// componentes
import ContTarjetas from "./Tarjetas/ContTarjetas";
import Catalogo from "./Catalogo";
import Articulos from "./Articulos";
import PublicacionesAnteriores from "./PublicacionesAnteriores";
import Formulario from "./Formulario";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
const inscribir = <FontAwesomeIcon icon={faInbox} />;

export default function ContenidoPrincipal(props) {
  window.gtag('config', 'G-R4JLPNE7SH', {
    'page_title' : 'Inicio',
    'page_path': '/inicio'
  });

  const context = useContext(GC);
  const obtenerOpcion = (item) => {
    let opcion = parseInt(item);
    //  console.log("item", item);
    switch (opcion) {
      case 1:
        context.setComponente(<Articulos actual={true} />);
        break;
      case 2:
        context.setComponente(<PublicacionesAnteriores />);
        break;
      case 3:
        context.setComponente(<Catalogo />);
        break;
      default:
        break;
    }
  };
  const handlerClickElemento = (item) => {
    //  console.log("llamado al formulario de inscripción");
    context.setComponente(<Formulario />);
  };

  return (
    <div className="container container-menu ">
      <div className="row">
        <ContTarjetas obtenerOpcion={obtenerOpcion} />
      </div>
      <div className="row">
      <div className="d-flex justify-content-center">
        <div className="align-self-center">
          <button
            type="button"
            className="btn btn-link"
            onClick={handlerClickElemento}
          >
            <img
              className="responsive mt-2 btn-suscribirse"
              src="./assets/img/btn_suscribirse.png"
              alt="suscribirse"
            />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
