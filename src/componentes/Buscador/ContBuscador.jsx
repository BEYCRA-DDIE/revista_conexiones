import Buscador from "./Buscador";
// import array from "./ej_tabla.json";



export default function ContBusador(props) {

  const obtenerFiltrados = (f) => {
    // console.log("Filtrados---->", f);
    props.filtrobusqueda(f)
  };

// var array = props.array;
console.log("array palabras clave", props.array[0].palabra_clave);
  return (
    <div className="row">
      <div className="col-sm-12">
        <Buscador obtenerFiltrados={obtenerFiltrados} array={props.array} />
      </div>
    </div>
  );
}
