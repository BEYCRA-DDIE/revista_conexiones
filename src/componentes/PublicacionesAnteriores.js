import React, { useContext } from "react";
import GC from "../_complementos/Global.context";

// componentes
import Editorial from "./Editorial";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
const inscribir = <FontAwesomeIcon icon={faInbox} />;

export default function PublicacionesAnteriores() {
  const context = useContext(GC);
  const obtenerOpcion = (item) => {
    let opcion = parseInt(item);
    console.log("item", item);
    switch (opcion) {
      case 1:
        context.setComponente(<Editorial />);
        break;
      case 2:
        // context.setComponente(<Articulos />);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
          <h1>Publicaciones Anteriores</h1>
      {/* <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success m-4 fs-3" onClick={obtenerOpcion}>Editorial</button>
        <button type="button" class="btn btn-success m-4 fs-3" onClick={obtenerOpcion}>Articulos</button>
      </div> */}
      </div>
    </div>
  );
}
