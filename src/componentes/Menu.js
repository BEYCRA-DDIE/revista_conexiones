import React, {useContext}  from "react";
import GC from "../_complementos/Global.context";

// componentes
import OpcionesInformacion from "./OpcionesInformacion";
import ContenidoPrincipal from "./ContenidoPrincipal";
import Busqueda from "./Busqueda";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome} from "@fortawesome/free-solid-svg-icons";

const inicio = <FontAwesomeIcon icon={faHome} />;

export default function Menu(props) {
const context = useContext(GC);

const obtenerOpcion = (item) => {
   let opcion = parseInt(item.currentTarget.name);
  // console.log("item",opcion);
  switch (opcion) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:      
      context.setComponente(<OpcionesInformacion opcion= {opcion}/>)
    break;
    case 5:      
      context.setComponente(<ContenidoPrincipal/>)
    break;
    case 8:      
      context.setComponente(<Busqueda/>)
    break;
    default:
      break;
  }
  // (opcion === 5)
  // ?context.setComponente(<ContenidoPrincipal/>)
  // :context.setComponente(<OpcionesInformacion opcion= {opcion}/>)
}
  return (
      <Navbar className= "fondo-menu" bg="" expand="lg">
        <Navbar.Brand className="btn-menu" as={Button} name="5" onClick={obtenerOpcion}>{inicio} </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
						<Nav.Link as={Button} name="0" onClick={obtenerOpcion}>
              <img src="./assets/img/img_informacion_general.png" alt="imagen" /> Informacion general              
            </Nav.Link>
            <Nav.Link className="btn-menu" as={Button} name="1" onClick={obtenerOpcion}>
            <img src="./assets/img/img_comite.png" alt="imagen" /> Comité Editorial
            
            </Nav.Link>
            <Nav.Link as={Button} name="2" onClick={obtenerOpcion}>
            <img src="./assets/img/img_comite.png" alt="imagen" /> Comité Asesor
            </Nav.Link>
            <Nav.Link as={Button} name="3" onClick={obtenerOpcion}>
            <img src="./assets/img/img_normas_publicacion.png" alt="imagen" /> Normas de publicación
            </Nav.Link>
            <Nav.Link as={Button} name="4" onClick={obtenerOpcion}>
            <img src="./assets/img/img_pasos_publicacion.png" alt="imagen" /> Pasos de publicación
            </Nav.Link>
            {/* <Nav.Link as={Button} name="4" onClick={obtenerOpcion}> */}
            <Nav.Link as={Button} name="8" onClick={obtenerOpcion}>
            <img src="./assets/img/img_buscar.png" alt="imagen" /> Buscar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
