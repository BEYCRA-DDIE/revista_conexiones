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


  const handleGetItem=(i)=> {
    props.obtenerItem( props.array[i]);
  }

  return (
    <div className="row">
      {props.array.map((item, i) => (
        <div key={"tarjetaColumna" + i} className={"col-" + conf.col}>
          <div className = {"card mb-4 " + conf.padding}>
            { item[conf.titulo] &&            
              <div className="card-header text-center">
                {JsxTitulo(conf.hx, item[conf.titulo])}
              </div>
            }
            {conf.img && 
              conf.img_url
              ?(<img
              src={ item[conf.imagen]}
              className= {"card mb-4 " + conf.imgpadding}
              alt={"imagen previa de " + item[conf.titulo]}
              />)
              :(<img
                src={"./assets/" + item.urlImg}
                className="img-fluid"
                alt={"imagen previa de " + item[conf.titulo]}
              />)
              }
             {/* <div className="card-body"></div>  */}
            <div className={"card-footer" + conf.footer}>
            {conf.informacion && 
                (<>
                  <span>{item[conf.numero]}° cuatrimestre {item[conf.anno]}<br />
                      Volumen: {item[conf.volumen]}
                      <br />
                      <a  href= {item[conf.url_revista]} target="_blank" className="enlaces-articulos">Revista</a>
                  </span> <br />
                  {
                        (item.articulos !== "0") && (
                        <>
                          <button type="button" name= "articulos" id = {item.id} className="btn btn-link enlaces-articulos" onClick= {props.handlerClickElemento}>Artículos</button><br />
                        </>
                        )}
                  </>
                )}
            <div className="d-grid gap-2">
              <button
                id={item.id}
                onClick={ ()=> handleGetItem(i) }
                className="btn btn-tarjetas btn-block"
              >
                {/* 👁️ Ver detalles */}
                {item[conf.descripcion]} 
              </button>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
