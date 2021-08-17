import React, { useContext, useState, useEffect } from "react";
import EncabezadoLetra from "./EncabezadoLetra";

import GC from "../_complementos/Global.context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
const arriba = <FontAwesomeIcon icon={faArrowAltCircleUp} />;

var arrayLetras = [],
  letraEncabezado = null,
  nombre = null;

export default function Catalogo() {
  const context = useContext(GC);
  const [cargado, setCargado] = useState(false);

  var datos = context.dataArticulos;

  function CargaDatos(cb) {
    let arreglo = [];

    datos.sort(function (a, b) {
      if (a.autores[0].apellido1 > b.autores[0].apellido1) {
        return 1;
      }
      if (a.autores[0].apellido1 < b.autores[0].apellido1) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    let letrasA = [];
    // console.log("datos",datos);
    datos.forEach((element) => {
      arreglo.push(element.autores);
    });
    // extrae la primera letra del primer autor
    arreglo.forEach(function (element, index) {
      letrasA[index] = element[0].apellido1[0];
    });
    //filtra y elimina repetidos
    arrayLetras = letrasA.filter((item, index) => {
      return letrasA.indexOf(item) === index;
    });
    console.log("datos", datos);
    cb();
  }

  useEffect(() => {
    CargaDatos(function () {
      setCargado(true);
    });
  }, []);

  const handlerClickLetra = (item) => {
    console.log("item", item.target.name);
  };

  function autores(autor) {
    var array = autor,
      nombreCompleto = "",
      nombreAutores = null;

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (index == 0) {
        console.log("está en 0", letraEncabezado !== element.apellido1[0]);
        if (letraEncabezado !== element.apellido1[0]) {
          console.log("condicional true");
          <EncabezadoLetra letra={element.apellido1[0]} arriba={arriba} />;
          letraEncabezado = element.apellido1[0];
        }
      }
      console.log(
        "autor",
        element.apellido1,
        element.apellido2,
        element.nombre
      );
      element.apellido2
        ? (nombreCompleto =
            nombreCompleto +
            element.apellido1 +
            " " +
            element.apellido2 +
            " " +
            element.nombre)
        : (nombreCompleto =
            nombreCompleto + element.apellido1 + " " + element.nombre);
      index < array.length - 1 && (nombreCompleto = nombreCompleto + "," + " ");
    }
    //coloca el nombre autor solo una vez para varios artículos
    if (nombreCompleto !== nombre) {
      nombre = nombreCompleto;
      nombreAutores = nombreCompleto;
    } else {
      nombreAutores = "";
    }

    return nombreAutores;
  }
  function encabezado(autor) {
    var array = autor,
      componente = null;

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (index == 0) {
        console.log("está en 0", letraEncabezado !== element.apellido1[0]);
        if (letraEncabezado !== element.apellido1[0]) {
          console.log("condicional true");
          componente = (
            <EncabezadoLetra letra={element.apellido1[0]} arriba={arriba} />
          );
          letraEncabezado = element.apellido1[0];
        }
      }
    }
    return componente;
  }

  // console.log("estoy en catalogo, datos", datos)
  return (
    <div className="container">
      {cargado ? (
        <React.Fragment>
          <div className="d-flex justify-content-center p-2 mb-2">
            <div className="align-self-center">
              <h2 className="align-middle">
                <a name="regresar" id="regresar"></a><strong>Catálogo por autor</strong>
              </h2>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              {arrayLetras.map((item, i) => (
                <li key={"letra" + i} className="page-item">
                  <a className="page-link" href={"#" + item.toLowerCase()}>
                    {item.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            {datos.map((item, i) => (
              <div key={"item" + i}>
                {encabezado(item.autores)}
                <p className="nombre-autor">{autores(item.autores)}</p>
                <ul>
                  <li>
                    <a
                      href={item.url_pdf}
                      target="_blank"
                      className="url-enlace"
                    >
                      {item.nombre_articulo}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </React.Fragment>
      ) : (
        <h4>
          Cargando datos <span className="spinner-grow"></span>
        </h4>
      )}
    </div>
  );
}
