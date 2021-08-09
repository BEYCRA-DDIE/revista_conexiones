import React, {useContext}  from "react";
import GC from "../_complementos/Global.context";

// componentes
import OpcionesInformacion from "./OpcionesInformacion";
import ContenidoPrincipal from "./ContenidoPrincipal";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const inicio = <FontAwesomeIcon icon={faHome} />;

export default function Menu(props) {
const context = useContext(GC);
const obtenerOpcion = (item) => {
   let opcion = parseInt(item.currentTarget.name);
  // console.log("item",opcion);
  (opcion === 5)
  ?context.setComponente(<ContenidoPrincipal/>)
  :context.setComponente(<OpcionesInformacion opcion= {opcion}/>)
}
  return (
      <Navbar className= "fondo-menu" bg="" expand="lg">
        <Navbar.Brand className="btn-menu" as={Button} name="5" onClick={obtenerOpcion}>{inicio} </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
						<Nav.Link as={Button} name="0" onClick={obtenerOpcion}>
              Informacion General
            </Nav.Link>
            <Nav.Link className="btn-menu" as={Button} name="1" onClick={obtenerOpcion}>
              Comité Editorial
            </Nav.Link>
            <Nav.Link as={Button} name="2" onClick={obtenerOpcion}>
            Comité Asesor
            </Nav.Link>
            <Nav.Link as={Button} name="3" onClick={obtenerOpcion}>
              Normas de publicación
            </Nav.Link>
            <Nav.Link as={Button} name="4" onClick={obtenerOpcion}>
              Pasos de publicación
            </Nav.Link>
            {/* <Nav.Link as={Button} name="4" onClick={obtenerOpcion}> */}
            <Nav.Link as={Button} name="8">
              Buscar
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex justify-content-end p-2">
            <FormControl
              type="search"
              placeholder="Búsqueda"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
  );
}
