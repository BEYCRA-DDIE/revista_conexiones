import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";
const arriba = <FontAwesomeIcon icon={faArrowAltCircleUp} />;

export default function ItemCatalogo(props) {
 var autor = props.item.autores[0];
 var letraInicial = autor['apellido1'][0];
//  const [encabezado, setEncabezado] = useState(true);


  return (
      <>
      {/* (encabezado) && <ItemCatalogo letra= {autor['apellido1'][0]}  arriba = {arriba} />  */}
      {autor['apellido1'][0] == {letraInicial}
        ?(
          <>
          <p>{props.item.nombre_articulo}</p>
          </>
        )
        :(
        <>
        <p>Nada</p>
        </>
        )
        }
      </>
  )
}
