import React from "react";
import { buscar } from 'gespro-utils/buscador';

var array = [];
export default function Buscador(props) {
  console.log("props.array desde buscador",props.array);

  array = props.array;
  
  const handleBuscar = (e) => {
    let palabra= e.target.value;
     let filtrados =  buscar(palabra, props.array );    
     console.log("filtrados", filtrados);
     props.obtenerFiltrados(filtrados);
  };

  return (
    <div className="input-group input-group-search mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="lupa-addon">
          🔍
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Digite la palabra a buscar"
        aria-label="text"
        aria-describedby="lupa-addon"
        onChange={handleBuscar}
      />
    </div>
  );
}
