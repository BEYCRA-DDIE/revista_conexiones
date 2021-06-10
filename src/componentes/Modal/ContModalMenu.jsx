import React, { useState } from "react";
import GModal from "./GModal";

const ContModalMenu = (props) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <GModal
        show={show}
        handleClose={handleClose}
        title={props.titulo}
        content={props.contenido}
        footer={props.footer}
      >
      </GModal>
    </>
  );
};

export default ContModalMenu;
