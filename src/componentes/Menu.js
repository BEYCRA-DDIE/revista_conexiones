import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const inicio = <FontAwesomeIcon icon={faHome} />

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">{inicio}</Nav.Link>
          <Nav.Link href="#action3">Información General</Nav.Link>
          <Nav.Link href="#action4">Comité Editorial</Nav.Link>
          <Nav.Link href="#action5">Comité Asesor</Nav.Link>
          <Nav.Link href="#action">Normas de publicación</Nav.Link>
          <Nav.Link href="#action">Pasos de publicación</Nav.Link>
          <Nav.Link href="#action">Buscar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
