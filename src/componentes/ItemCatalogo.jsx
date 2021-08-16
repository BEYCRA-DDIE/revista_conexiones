export default function ItemCatalogo(props) {
  return (
      <>
      <h2>
        <strong>
        <a name={props.letra} id={props.letra}></a>{props.letra}
      </strong>
      <a href="#regresar">
        <span>{props.arriba}</span>
      </a>
      </h2>
      </>
  )
}
