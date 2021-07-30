import Tarjetas from "./Tarjetas";

const confTarjetas = {
  img: true, //Si contienes imagenes  img=true
  img_url: true,
  col: "sm-2", //Columna boostrap
  hx: 1, //tamaño del título (1 - 6) Ej si es (h1) hx= 1
  volumen: "volumen", // nombre del campo con la iformación que se depliega en el título de la tarjeta
  numero: "numero", //nombre del campo de la descripción
  imagen: "imagen",
  anno: "anno",
  informacion: true,
  
   titulo: "titulo", // nombre del campo con la iformación que se depliega en el título de la tarjeta
  // resumen: "resumen", //nombre del campo de la descripción
  // autor: "autor",
  // paginas : "pagina",
  // pdf : "url_pdf"
};

export default function ContAnteriores(props) {
  console.log("array", props.array);
  const obtenerItemTarjeta = (item) => {
    // console.log(item.id);
    props.obtenerOpcion(item.id);
  };
  // return <div><p>Contanteriores</p></div>
  return <Tarjetas array={props.array} obtenerItem={obtenerItemTarjeta} conf={confTarjetas} />;
}
