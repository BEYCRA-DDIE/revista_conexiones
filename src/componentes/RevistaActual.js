import React, { useContext } from "react";
import GC from "../_complementos/Global.context";

// componentes
import ContTarjetas from "./Tarjetas/ContTarjetas";
import Catalogo from "./Catalogo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
const inscribir = <FontAwesomeIcon icon={faInbox} />;

export default function RevistaActual() {
  const context = useContext(GC);
  const obtenerOpcion = (item) => {
    let opcion = parseInt(item);
    console.log("item", item);
    switch (opcion) {
      case 1:
        context.setComponente(<Editorial />);
        break;
      case 2:
        context.setComponente(<Articulos />);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
       {/* llamada a tarjetasarticulos */}
      </div>
    </div>
  );
}
