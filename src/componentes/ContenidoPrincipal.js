import React, {useContext} from "react";
import GC from "../_complementos/Global.context"

// componentes
import ContTarjetas from "./Tarjetas/ContTarjetas";
import Catalogo from "./Catalogo";
import ContTarjetasArticulos from "./Tarjetas/ContTarjetasArticulos";
import PublicacionesAnteriores from "./PublicacionesAnteriores";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
const inscribir = <FontAwesomeIcon icon={faInbox} />;

export default function ContenidoPrincipal(props){
const context = useContext(GC);
const obtenerOpcion = (item) => {
  let opcion = parseInt(item);
     console.log("item", item);
  switch (opcion) {
    case 1:
      context.setComponente(<ContTarjetasArticulos/>) 
      break;
    case 2:
      context.setComponente(<PublicacionesAnteriores/>) 
    break;
    case 3:
      context.setComponente(<Catalogo/>) 
      break;
  
    default:
      break;
  }
 }

return (
    <div className="container mt-4">
      <div className="row">
      <ContTarjetas obtenerOpcion={obtenerOpcion}/>
      </div>   
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-success m-4 fs-3">Suscribirse {inscribir}</button>
      </div>
    </div>
  );
};