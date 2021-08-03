import React, { useContext, useState, useEffect } from "react";
import ContGModal from "./Modal/ContGModal";

//componentes
import ContTarjetasArticulos from "./Tarjetas/ContTarjetasArticulos";
import PublicacionesAnteriores from "./PublicacionesAnteriores";

import GC from "../_complementos/Global.context";

import { getData } from "gespro-utils/akiri";
import { filtrarKey } from "gespro-utils/filtrar_array";

import config from "../config.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";

const anterior = <FontAwesomeIcon icon={faAngleDoubleLeft} />;

/* URL API */
const API_URL = config.apiDev;

var filtrados = null,
  revista = null,
  meses = [
    "",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

export default function Articulos(props) {
  const context = useContext(GC);
  const [cargado, setCargado] = useState(false);
  const [verEditorial, setVerEditorial] = useState(false);
  var datos = context.dataArticulos;

  // console.log("datos articulos", datos);
  // console.log("actual", props.actual);

    async function CargaDatos() {
    // carga de los JSON de los selects
    if (props.actual) {
      let url = API_URL + "consulta_ultima_revista.php";
      await getData(url).then((respuesta) => {
        revista = respuesta[0];
        // console.log("revista", revista);
        const id = revista.id;
        filtrados = filtrarKey(datos, "id_revista", id);
        setCargado(true);
      });
    } else {
      filtrados = filtrarKey(datos, "id_revista", "1");
      revista = props.revista;
      setCargado(true);
    }
  }

  useEffect(() => {
    CargaDatos();
  }, []);

  const handlerClickButton = () => {
    setVerEditorial(true);
  };

  const handlerClickElemento = () => {
    context.setComponente(<PublicacionesAnteriores />);
  };

  return (
    <div className="container-fluid mt-4">
      {cargado ? (
        <React.Fragment>
          <div className="row">
            <div className="col-sm-10">
              {!props.actual && (
                <>
                  <button
                    type="button"
                    name="regresar"
                    className="btn btn-link"
                    onClick={handlerClickElemento}
                  >
                  {anterior} Regresar a Publicaciones Anteriores
                  </button>
                  <br />
                </>
              )}
            </div>
            <div className="col-sm-2">
              <ContGModal
                textoboton="Ver Editorial"
                titulo="Editorial"
                data={1}
              />
            </div>
          </div>
          <h1>{revista.nombre} </h1>
          <h2>
            Volumen {revista.volumen}, número {revista.numero} -{" "}
            {meses[revista.mes]} {revista.anno} - ISSN {revista.issn}
          </h2>
          <ContTarjetasArticulos array={filtrados} />
        </React.Fragment>
      ) : (
        <h4>
          Cargando datos <span className="spinner-grow"></span>
        </h4>
      )}
    </div>
  );
}
