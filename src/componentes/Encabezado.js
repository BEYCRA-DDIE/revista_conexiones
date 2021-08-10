import React from "react";

const Encabezado = () => {
  return (
    <div className="container-fluid text-center background-container">
      {/* <div class="d-flex flex-row justify-content-center"> */}
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex justify-content-start">
          <img
            className="mt-2 logo-mep"
            src="./assets/img/logo-mep.png"
            alt="logo mep"
          />{" "}
        </div>
      <div class="d-flex justify-content-center mt-4 mb-2">
      <img
          className="img-fluid img-encabezado"
          src="./assets/img/img_titulo.png"
          alt="imagen del título Revista Conexiones"
        />        
      </div>
      <div class="d-flex justify-content-center col-header"> </div>
      </div>
    </div>
  );
};

export default Encabezado;
