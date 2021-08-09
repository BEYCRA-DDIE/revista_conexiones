import React from "react";

const Encabezado = () => {
  return (
    <div className="container-fluid text-center background-container">
      <div class="d-flex flex-row">
        <div class="d-flex justify-content-start">
          <img
            className="mt-2"
            src="./assets/img/logo-mep.png"
            alt="logo mep"
          />{" "}
        </div>
      </div>
      <div class="d-flex flex-row">
      {/* <div class="align-self-center"> */}
      <div class="d-flex justify-content-center">
      <div class="p-2 bd-highlight"> a</div>
  <div class="p-2 bd-highlight"><img
          className="img-fluid img-encabezado"
          src="./assets/img/img_titulo.png"
          alt="imagen del título Revista Conexiones"
        /></div>
  <div class="p-2 bd-highlight"> </div>
        
      </div>
      </div>
    </div>
  );
};

export default Encabezado;
