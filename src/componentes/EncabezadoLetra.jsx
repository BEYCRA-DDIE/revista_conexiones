export default function EncabezadoLetra(props) {
  return (
      <>
        <h2>
          <strong>
          <a name={props.letra.toLowerCase()} id={props.letra.toLowerCase()}></a>{props.letra}&nbsp;
        </strong>
        <a href="#regresar">
          <span>{props.arriba}</span>
        </a>
        </h2>
      </>
  )
}
