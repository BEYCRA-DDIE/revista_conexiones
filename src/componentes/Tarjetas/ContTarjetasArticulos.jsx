import TarjetasArticulos from "./TarjetasArticulos";

const confTarjetas = {
  img: false, //Si contienes imagenes  img=true
  col: "sm-12", //Columna boostrap
  hx: 6, //tamaño del título (1 - 6) Ej si es (h1) hx= 1
  titulo: "nombre_articulo", // nombre del campo con la iformación que se depliega en el título de la tarjeta
  resumen: "resumen", //nombre del campo de la descripción
  autor: "autor",
  paginas : "pagina",
  pdf : "url_pdf"
};

export default function ContTarjetasArticulos(props) {
  console.log("props.array", props.array);
  const obtenerItemTarjeta = (item) => {
    // console.log(item.id);
    props.obtenerOpcion(item.id);
  };
  // return <Tarjetas array={array} obtenerItem={obtenerItemTarjeta} conf={confTarjetas} />;
  return <TarjetasArticulos array={props.array} obtenerItem={obtenerItemTarjeta} conf={confTarjetas} />;
}