import Modal from "react-bootstrap/Modal";

const GModal = (props) => {   
  
  return (
    <Modal 
    size="lg"
    show={props.show} 
    onHide={props.handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title> {props.title} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.content}
      </Modal.Body>
      {(props.footer) &&
      <>
      <Modal.Footer>
        {props.footer}        
      </Modal.Footer>
      </>
      }
    </Modal>
  );
};

export default GModal;
