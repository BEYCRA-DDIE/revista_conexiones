import React  from "react";
// import React, {useContext}  from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// componentes
// import GC from "../_complementos/Global.context";

import InformacionGeneral from "./InformacionGeneral";
import ComiteAsesor from "./ComiteAsesor";
import ComiteEditorial from "./ComiteEditorial";

const inicio = <FontAwesomeIcon icon={faHome} />;

export default function Menu(props) {
	// const context = useContext(GC);
	
  const handlerClickOption = (e) => {
		// console.log("e",e.location.pathname);
		// props.opcion(e.location.pathname)
		console.log("Opción Información", e.target.name);
  };

  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Inicio {inicio}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
            {/* <Nav.Link as={Link} to="/informacion">
              Informacion General
            </Nav.Link> */}
						<Nav.Link as={Button} name="informacion" onClick={handlerClickOption}>
              Informacion General
            </Nav.Link>
            <Nav.Link as={Button} name="editorial" onClick={handlerClickOption}>
              Comité Editorial
            </Nav.Link>
            <Nav.Link as={Button} onClick={handlerClickOption}>
            </Nav.Link>
            <Nav.Link as={Button} onClick={handlerClickOption}>
              Normas de publicación
            </Nav.Link>
            <Nav.Link as={Button} onClick={handlerClickOption}>
              Pasos de publicaciónde publicación
            </Nav.Link>
          </Nav>
          <Form className="d-flex text-end">
            <FormControl
              type="search"
              placeholder="Búsqueda"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
  );
}
