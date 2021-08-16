import React, { useContext, useState, useEffect } from "react";
import ContGModal from "./Modal/ContGModal";

import GC from "../_complementos/Global.context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";
const arriba = <FontAwesomeIcon icon={faArrowAltCircleUp} />;

var arrayLetras = [];

export default function Catalogo() {

  const context = useContext(GC);
  const [cargado, setCargado] = useState(false);
  var datos = context.dataArticulos;
  var jsxCatalogo= null;
  
  function CargaDatos(cb){  
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
    datos.forEach(element => {
      arreglo.push(element.autores);
    });
    // extrae la primera letra del primer autor
     arreglo.forEach(function(element,index) {
      letrasA[index]= element[0].apellido1[0];
     })
     //filtra y elimina repetidos
     arrayLetras = letrasA.filter((item,index)=>{
      return letrasA.indexOf(item) === index;
    })
    
    // console.log("arrayLetras",arrayLetras);
     cb();
}
  
   useEffect(() => {
    CargaDatos(function(){setCargado(true)});
  }, []);

  const handlerClickLetra = (item) => {
      console.log("item",item.target.name);
  }

  jsxCatalogo = (
		<React.Fragment>
  <h2>
          <strong>
            <a name="a" id="a"></a>A
          </strong>{" "}
          <a href="#regresar">
            <span
            >{arriba}</span>
          </a>
        </h2>
        <p>
          <strong>Abarca Guzmán, Gerardo Felipe</strong>
        </p>
        <p>
          <a href="art/9/rivera_abarca.pdf" target="_blank">
            La propaganda electoral en el Código Electoral
          </a>
          <br />
          En: Revista de Derecho Electoral. -- N.º 9 (Ene.-Jun., 2010)
        </p>
        <p>
          <strong>Abarca Rodríguez, Allan</strong>
        </p>
        <p>
          <a href="art/28/abarca_murillo.pdf" target="_blank">
            Las promesas en el ámbito de la salud pública, elecciones
            presidenciales 2018, Costa Rica
          </a>
          <br />
        </p>
        <h2>
          <strong>
            <a name="b" id="b"></a>B{" "}
            <a href="#regresar">
              <span>{arriba}</span>
            </a>
          </strong>
        </h2>
        <p>
          <strong>Bachelet Jeria, Michelle</strong>
        </p>
        <p>
          <a href="art/7/bachelet.pdf" target="_blank">
            Democracia y género
          </a>
          <br />
          En: Revista de Derecho Electoral. -- Nº 7 (Ene.-Jun., 2009)
        </p>
        <p>
          <strong>Baeza Belda, Joaquín</strong>
        </p>
        <p>
          <a href="art/24/baeza-belda.pdf" target="_blank">
            Un asunto interno: La derrota del peronismo en las elecciones
            argentinas de 1983
          </a>
          <br />
          En: Revista de Derecho Electoral. -- N.º 24 (Jul.-Dic., 2017)
        </p>
        <p>
          <strong>Balbuena Cisneros, Arminda</strong>
        </p>
        <p>
          <a href="art/14/balbuena_cisneros.pdf" target="_blank">
            El Centro para el Desarrollo Democrático del Instituto Federal
            Electoral y la democracia en México
          </a>
          <br />
          En: Revista Derecho Electoral. -- N.º 14 (Jul.-Dic., 2012)
        </p>
        <p>
          <strong>Barahona Riera, Macarena</strong>
        </p>
        <p>
          <a href="art/29/barahona_mora.pdf" target="_blank">
            Cien años de las luchas sociales contra la dictadura de Federico
            Tinoco: memoria y derechos políticos. Al maestro Marcelino García
            Flamenco
          </a>
          <br />
          Revista de Derecho Electoral. -- N.º 29 (Ene.-Jun., 2020)
        </p>
        <p>
          <strong>Bareiro, Line</strong>
        </p>
        <p>
          <a href="art/7/BareiroI.pdf" target="_blank">
            El camino hacia la paridad : evaluación de las cuotas de
            participación política de las mujeres en América Latina
          </a>
          <br />
          En: Revista de Derecho Electoral. -- Nº 7 (Ene.-Jun., 2009)
        </p>
        <p>
          <strong>Barragán, Melany</strong>
        </p>
        <p>
          <a href="art/19/melany_barragan.pdf" target="_blank">
            Consecución de mayorías legislativas en América Latina : una
            revisión crítica{" "}
          </a>
          <br />
          En: Revista de Derecho Electoral. -- N.° 19 (Ene.-Jun., 2015)
        </p>
        <p>
          <strong>Barrientos del Monte, Fernando</strong>
        </p>
        <p>
          <a href="art/10/barrientos_monte.pdf" target="_blank">
            Confianza en las elecciones y el rol de los organismos electorales
            en América Latina
          </a>
          <br />
          En: Revista de Derecho Electoral. -- N.º 10 (Jul.-Dic., 2010)
        </p>
        <p>
          <strong>Bautista Díaz, Roberto</strong>
        </p>
        <p>
          <a href="art/21/bautista_diaz.pdf" target="_blank">
            ¿Cuba, democracia a la vista?{" "}
          </a>
          <br />
          En: Revista de Derecho Electoral. -- N.º 21 (Ene.-Jun., 2016)
        </p>
        <p>
          <strong>Beers González, Robert F</strong>
        </p>
        <p>
          <a href="art/2/beers.pdf" target="_blank">
            Partidos políticos en el ámbito local
          </a>
          <br />
          En: Revista de Derecho Electoral. -- Nº 2 (Jul.-Dic., 2006)
        </p>
        <p>
          <strong>Beltrán Conejo, Vanessa</strong>
        </p>

        {/* Letra C */}
        <h2>
          <strong>
            <a name="c" id="c"></a>C{" "}
          </strong>
          <strong>
            <a href="#regresar"><span>{arriba}</span></a>
          </strong>
        </h2>
        <p>
          <strong>Caballero Álvarez, Rafael</strong>
        </p>
        <p>
          <a href="art/22/caballero_alvarez.pdf" target="_blank">
            La educación cívica en el México del siglo XXI: perspectivas y
            expectativas&nbsp;
          </a>
          <br />
          En: Revista de Derecho Electoral. -- N.º 22 (Jul.-Dic., 2016)
        </p>
        <p>
          <strong>Calderón González, Ariel</strong>
        </p>
        <p>
          <a href="art/29/calderon_cordoba_guido.pdf" target="_blank">
            La muy necesaria renovación de la revocatoria de mandato de la
            alcaldía en Costa Rica
          </a>
          <br />
          Revista de Derecho Electoral. -- N.º 29 (Ene.-Jun., 2020)
          <strong></strong>
        </p>
        <p>
          <strong>Calle Lombada, Humberto de la</strong>
        </p>
        <p>
          <a href="art/11/calle_lombana.pdf" target="_blank">
            La relevancia de la transparencia en la rendición de cuentas, y sus
            efectos sobre la legitimidad de los partidos políticos
          </a>
          <br />
          En: Revista Derecho Electoral. -- N.º 11 (Ene.-Jun., 2011)
        </p>
        <p>
          <strong>Calvo Bonilla, Gonzalo</strong>
        </p>
        <p>
          <a href="art/29/calvo_otros.pdf" target="_blank">
            Un estudio sobre comportamiento electoral a nivel subnacional: el
            caso del cantón de Nandayure
          </a>
          <br />
          Revista de Derecho Electoral. -- N.º 29 (Ene.-Jun., 2020)
          <strong> </strong>
        </p>
        <p>
          <a href="art/25/calvo_otros.pdf" target="_blank">
            Partidos políticos locales: ¿Legitimadores o perdedores de la
            democracia?
          </a>
          <br />
          En: Revista de Derecho Electoral. -- N.º 25 (Ene.-Jul., 2018)
        </p>
        <p>
          <strong>Camacho Sánchez, Sharon</strong>
        </p>
        <p>
          <a href="art/28/cascante_camacho.pdf" target="_blank">
            El sistema de partidos en los cantones: análisis de la distribución
            territorial de los apoyos (1953-2016)
          </a>
          <br />
          En: Revista de Derecho Electoral. -- N.º 28 (Jul.-Dic., 2019)
          <strong></strong>
        </p>
        <p>
          <strong>Cambronero Torres, Andrei</strong>
        </p>
        <p>
          <a href="art/31/cambronero_torres.pdf" target="_blank">
            Sumario electoral: una propuesta para la atención célere de
            denuncias por faltas electorales
          </a>
          <br />
          En: Revista de Derecho Electoral. -- N.º 31 (Ene.-Jun., 2021)
          <strong></strong>
        </p>
    </React.Fragment>
  )
  // console.log("estoy en catalogo, datos", datos)
  return (
    <div className="container">
         {cargado ? (
        <React.Fragment>
      <div>
        <h2>
          <a name="regresar" id="regresar"></a>Catálogo por autor:
        </h2>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
        {arrayLetras.map((item, i) => (
          <li key={"letra"+i}className="page-item">
            <a className="page-link" href={"#"+item.toLowerCase()}> 
             {item.toUpperCase()}
            </a>
          </li>
        ))}
        </ul>
      </nav>
      <div>
        {jsxCatalogo}
      
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
