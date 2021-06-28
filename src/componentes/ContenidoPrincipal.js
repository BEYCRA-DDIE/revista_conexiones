import React, {useContext} from "react";
import GC from "../_complementos/Global.context"

// componentes
import ContTarjetas from "./Tarjetas/ContTarjetas";
import Catalogo from "./Catalogo";


export default function ContenidoPrincipal(props){
const context = useContext(GC);
const obtenerOpcion = (item) => {
     console.log("item", item);
     context.setComponente(<Catalogo/>)
 }

return (
    <div className="container mt-4">
      <div className="row">
      <ContTarjetas obtenerOpcion={obtenerOpcion}/>
      </div>     
    </div>
  );
};