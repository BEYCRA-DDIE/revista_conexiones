import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const inicio = <FontAwesomeIcon icon={faHome} />

export default function Menu() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{inicio} | </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Información General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Comité Editorial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Comité Asesor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Normas de publicación</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pasos de publicación</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  );
};