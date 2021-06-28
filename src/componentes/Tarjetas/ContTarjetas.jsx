import Tarjetas from "./Tarjetas";
import array from "./menu.json";

const confTarjetas = {
  img: true, //Si contienes imagenes  img=true
  col: "sm-4", //Columna boostrap
  hx: 1, //tamaño del título (1 - 6) Ej si es (h1) hx= 1
  titulo: "titulo", // nombre del campo con la iformación que se depliega en el título de la tarjeta
  descripcion: "descripcion", //nombre del campo de la descripción
};

export default function ContTarjetas(props) {
  const obtenerItemTarjeta = (item) => {
    // console.log(item.id);
    props.obtenerOpcion(item.id);
  };

  return <Tarjetas array={array} obtenerItem={obtenerItemTarjeta} conf={confTarjetas} />;
}
