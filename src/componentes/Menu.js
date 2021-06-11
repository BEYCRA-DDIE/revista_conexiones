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

const inicio = <FontAwesomeIcon icon={faHome} />;

export default function Menu(props) {
  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Button} name="5" onClick={props.opcion}>{inicio} </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
						<Nav.Link as={Button} name="0" onClick={props.opcion}>
              Informacion General
            </Nav.Link>
            <Nav.Link as={Button} name="1" onClick={props.opcion}>
              Comité Editorial
            </Nav.Link>
            <Nav.Link as={Button} name="2" onClick={props.opcion}>
            Comité Asesor
            </Nav.Link>
            <Nav.Link as={Button} name="3" onClick={props.opcion}>
              Normas de publicación
            </Nav.Link>
            <Nav.Link as={Button} name="4" onClick={props.opcion}>
              Pasos de publicación
            </Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-end p-2">
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
