import React, {useContext} from "react";
import GC from "../_complementos/Global.context"

// componentes
import ContTarjetas from "./Tarjetas/ContTarjetas";
import Catalogo from "./Catalogo";
import Articulos from "./Articulos";
import PublicacionesAnteriores from "./PublicacionesAnteriores";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
const inscribir = <FontAwesomeIcon icon={faInbox} />;

export default function ContenidoPrincipal(props){
const context = useContext(GC);
const obtenerOpcion = (item) => {
  let opcion = parseInt(item);
    //  console.log("item", item);
  switch (opcion) {
    case 1:
      context.setComponente(<Articulos actual = {true} />) 
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
 const handlerClickElemento = (item) => {
   console.log("llamado al formulario de inscripción")
 }

return (
    <div className="container mt-4">
      <div className="row">
      <ContTarjetas obtenerOpcion={obtenerOpcion}/>
      </div>   
      <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-link" onClick= {handlerClickElemento}>
      <img
            className="mt-2 btn-suscribirse"
            src="./assets/img/btn_suscribirse.png"
            alt="suscribirse"
          />
      </button><br />
      </div>
    </div>
  );
};