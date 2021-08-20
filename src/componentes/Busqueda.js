import React, { useContext, useState, useEffect } from "react";

import GC from "../_complementos/Global.context";
import TarjetaArticulos from "./Tarjetas/TarjetasArticulos";
import ContBuscador from "../componentes/Buscador/ContBuscador";

// import alertify from "alertifyjs";
// import "alertifyjs/build/css/alertify.min.css";

import { sendData } from "gespro-utils/akiri";
import { getData } from "gespro-utils/akiri";

import config from "../config.json";

/* URL API */
const API_URL = config.apiDev;
var publicaciones = null,
  campoRevista = {};
export default function Busqueda() {
  const [cargado, setCargado] = useState(false);
  const [articulosFiltrados, setArticulosFiltrados] = useState(null);
  const context = useContext(GC);
  var datos = context.dataArticulos;

  console.log("datos articulos", datos);

  function obtenerDatosRevista(dataId) {
    let arrayData = [];
    publicaciones.forEach((element) => {
      if (parseInt(element.id) === parseInt(dataId)) {
        console.log("Es igual", element.id, " = ", dataId);
        campoRevista.nombre = element.nombre;
        campoRevista.volumen = element.volumen;
        campoRevista.numero = element.numero;
        campoRevista.anno = element.anno;
        arrayData.push(campoRevista);
      }
    });
    return arrayData;
  }
  async function asyncCallData() {
    let url = API_URL + "consulta_revistas.php";

    await getData(url).then((respuesta) => {
      publicaciones = respuesta;
      console.log("publicaciones", publicaciones);

      for (let index = 0; index < datos.length; index++) {
        const element = datos[index];
        campoRevista = {};
        element.revista = obtenerDatosRevista(element.id_revista);
      }
    });
    setArticulosFiltrados(datos);
    setCargado(true);
    console.log("datos con revista", datos);
  }

  useEffect(() => {
    asyncCallData();
  }, []);

  const filtrobusqueda = (f) => {
    console.log("Filtrados---->", f);
    setArticulosFiltrados(f)
  };

  const obtenerItemTarjeta = (item) => {
    console.log(item.id);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center p-3">
        <div className="align-self-center">
          <h1 className="titulares-menu">Búsqueda</h1>
        </div>
        <hr />
      </div>
      {cargado ? (
        <React.Fragment>
          <div className="row m-2">
            <div className="col-12">
              <ContBuscador array={datos} filtrobusqueda={filtrobusqueda} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mb-2">
              {articulosFiltrados && (
                <span>{articulosFiltrados.length} artículos encontrados.</span>
              )}
            </div>
            <div className="row">
              {articulosFiltrados.length > 0 ? (
                articulosFiltrados.map((item, i) => (
                  <div key={"tarjetaColumna" + i} className="col-12">
                    <p> 
                      <span>
                        <a
                          className="link-articulos-busqueda"
                          href={item.url_pdf}
                          target="_blank"
                        >
                          {item.nombre_articulo}
                        </a>
                      </span>
                      <br />
                      <ul>
                      <li>
                      {item.autores.length == 1 ? (
                        <>
                          <span className="">
                            <strong>Autor(a): </strong>
                          </span>
                          {item.autores[0].nombre} {item.autores[0].apellido1}{" "}
                          {item.autores[0].apellido2}
                          <br />
                        </>
                      ) : (
                        <>
                          <span className="">
                            <strong>Autoras(es): </strong>
                          </span>
                          {item.autores.map((autor, i) => (
                            <span key={"itemautores" + i}>
                              <span>{autor.nombre} </span>
                              {autor.apellido2 ? (
                                <>
                                  <span>{autor.apellido1} </span>
                                  <span>{autor.apellido2}</span>
                                </>
                              ) : (
                                <>
                                  <span>{autor.apellido1}</span>
                                </>
                              )}
                              {i !== item.autores.length - 1 && <span>, </span>}
                            </span>
                          ))}
                          <br />
                        </>
                      )}
                      </li>
                      <span>
                        <li>En: {item.revista[0].nombre} <br /></li>
                        <li>Volumen: {item.revista[0].volumen} Número: {item.revista[0].numero} Año: {item.revista[0].anno}</li>
                      </span>
                      <br />
                    </ul>
                    </p>
                  </div>
                ))
              ) : (
                <div className="col-sm-12 alert alert-warning" role="alert">
                  No se encuentran resultados de búsqueda con esas palabras.
                </div>
              )}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="row m-2">
          <div className="col-12">
            <h4>
              Enviando la solicitud. Por favor espere un momento
              <span className="spinner-grow"></span>
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}
