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
            <div className="card pb-2 mb-4 ">
              { item[conf.titulo] !== "" &&
              <div className="card-header text-center">
                {JsxTitulo(conf.hx, item[conf.titulo])}
              </div>
              }
              <div className="card-body">
                  {item[conf.descripcion]}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  