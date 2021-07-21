import React, { useContext } from "react";
import GC from "../_complementos/Global.context";

// componentes
import Editorial from "./Editorial";
import ArticulosActuales from "./ArticulosActuales";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
const inscribir = <FontAwesomeIcon icon={faInbox} />;

export default function RevistaActual() {
  const context = useContext(GC);
  context.setComponente(<ArticulosActuales />);
  const obtenerOpcion = (item) => {
    let opcion = parseInt(item.target.id);
    console.log("opcion", opcion);
    switch (opcion) {
      case 1:
        console.log("opcion 1");
        context.setComponente(<Editorial />);
        break;
      case 2:
         context.setComponente(<ArticulosActuales />);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-success m-4 fs-3" id={1}  onClick={obtenerOpcion}>Editorial</button>
        <button type="button" className="btn btn-success m-4 fs-3" id ={2} onClick={obtenerOpcion}>Articulos</button>
      </div>
      </div>
    </div>
  );
}
