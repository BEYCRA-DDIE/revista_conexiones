import TarjetasAnteriores from "./TarjetasAnteriores";

const confTarjetas = {
  img: true, //Si contienes imagenes  img=true
  img_url: true,
  col: "sm-3", //Columna boostrap
  hx: 1, //tamaño del título (1 - 6) Ej si es (h1) hx= 1
  volumen: "volumen", // nombre del campo con la iformación que se depliega en el título de la tarjeta
  numero: "numero", //nombre del campo de la descripción
  imagen: "imagen",
  anno: "anno",
  mes : "mes",
  informacion: true,
  titulo: "titulo",
  url_revista: "url_revista",
  footer: "",
  padding: "padding-revista",
};

export default function ContAnteriores(props) {
  const obtenerItemTarjeta = (item) => {
    // console.log(item.id);
    props.obtenerOpcion(item.id);
  };

  return <TarjetasAnteriores array={props.array} obtenerItem={obtenerItemTarjeta} conf={confTarjetas} handlerClickElemento= {props.handlerClickElemento}/>;
}
