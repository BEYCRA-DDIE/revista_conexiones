import React, { useContext, useState, useEffect } from "react";
import ContGModal from "./Modal/ContGModal";
import ItemCatalogo from "./ItemCatalogo";
import FichaCatalogo from "./FichaCatalogo";

import GC from "../_complementos/Global.context";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";
// const arriba = <FontAwesomeIcon icon={faArrowAltCircleUp} />;

var arrayLetras = [],
    letraEncabezado = 'A';

export default function Catalogo() {

  const context = useContext(GC);
  const [cargado, setCargado] = useState(false);
  const [encabezado, setEncabezado] = useState(true);

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
    // datos.forEach(item =>{
    //   console.log(item.autores[0]['apellido1'][0] == letraEncabezado);
    // })
    console.log("datos", datos);
     cb();
}
  
   useEffect(() => {
    CargaDatos(function(){setCargado(true)});
  }, []);

  const handlerClickLetra = (item) => {
      console.log("item",item.target.name);
  }

  // function jsxCatalogo(item) {
  //   if((item.props.item.autores[0]['apellido1'][0] == letraEncabezado)){
  //     encabezado = false;
  //     <ItemCatalogo letra= {autor['apellido1'][0]}  arriba = {arriba} /> 
  //   }
  // };

  function autores (autor){
    var array = autor,
        nombreCompleto = "";
        
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      console.log("autor", element.apellido1, element.apellido2, element.nombre);
      (element.apellido2)
      ?nombreCompleto = nombreCompleto + element.apellido1+" "+element.apellido2+" "+element.nombre
      :nombreCompleto = nombreCompleto + element.apellido1+" "+element.nombre;
      (index < array.length-1) && (nombreCompleto = nombreCompleto+", ")
    }
    return nombreCompleto;
  }
 
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
      {datos.map((item, i) =>(
        <React.Fragment>
            {autores(item.autores)}
          {/* {item.autores.map((autor,j)=>(
          <>
          
            <span><strong>{autor.apellido1} {autor.apellido2} {autor.nombre},</strong> </span>
          </>
          ))} */}
          <p><a href= {item.url_pdf} target="_blank" >{item.nombre_articulo}</a></p>
        </React.Fragment>
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
