const JsxTitulo = (hx, texto) => {
  //console.log(hx, texto);
  let titulo;
  switch (hx) {
    case 1:
      titulo = <h1 className="card-title"> {texto} </h1>;
      break;
    case 2:
      titulo = <h2 className="card-title"> {texto} </h2>;
      break;
    case 3:
      titulo = <h3 className="card-title"> {texto} </h3>;
      break;
    case 4:
      titulo = <h4 className="card-title"> {texto} </h4>;
      break;
    case 5:
      titulo = <h5 className="card-title"> {texto} </h5>;
      break;
    case 6:
      titulo = <h6 className="card-title"> {texto} </h6>;
      break;
    default:
      titulo = "Opción fuera de rango****";
      break;
  }
  return titulo;
};

export default function Tarjetas(props) {
  const conf = props.conf;

  const handleGetItem = (i) => {
    props.obtenerItem(props.array[i]);
  };

  return (
    <div className="row">
      {props.array.map((item, i) => (
        <div key={"tarjetaColumna2" + i} className={"col-" + conf.col}>
          <div className={"card mb-4 " + conf.padding}>
            {item[conf.titulo] && (
              <div className="card-header text-center">
                {JsxTitulo(conf.hx, item[conf.titulo])}
              </div>
            )}
            <div className="card-body">
              <img
                src={item[conf.imagen]}
                className={"img-fluid rounded"}
                alt={"imagen previa de " + item[conf.titulo]}
              />
              <p>
                <span>
                  {item[conf.numero]}° cuatrimestre {item[conf.anno]}
                  <br />
                  Volumen: {item[conf.volumen]}
                  <br />
                  <a className="enlaces-articulos" href={item[conf.url_revista]} target="_blank">
                    Revista
                  </a>
                </span>{" "}
                <br />
                {item.articulos !== "0" && (
                  <>
                    <button
                      type="button"
                      name="articulos"
                      id={item.id}
                      className="btn btn-link enlaces-articulos"
                      onClick={props.handlerClickElemento}
                    >
                      Artículos
                    </button>
                    <br />
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
