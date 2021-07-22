import React, { useState } from "react";
import DataEditorial from "../DataEditorial";

import GModal from "./GModal";

const ContGModal = (props) => {
var contenido = null;
  switch (props.data) {
    case 1:
      contenido = DataEditorial;
      break;  
    default:
      break;
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
      <div className="row">
        <div className="col-12">
        <div className="d-flex justify-content-end">
          <input
            className="btn btn-outline-success"
            type="button"
            onClick={handleShow}
            value={props.textoboton}
          />
          </div>
        </div>
      </div>
        <GModal
        show={show}
        handleClose={handleClose}
        title={props.titulo}
        content={<DataEditorial/>}
        footer={props.footer}
      >
      </GModal>
     
    </>
  );
};

export default ContGModal;