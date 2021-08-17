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
        titulo = <h6 className="card-title text-left"> {texto} </h6>;
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
          <h3>Artículos</h3>
        {props.array.map((item, i) => (
          <div key={"tarjetaColumna" + i} className={"col-" + conf.col}>
            <div className="card shadow-sm  pb-2 mb-4 ">
              { item[conf.titulo] !== "" &&
              <div className="card-header">
                {JsxTitulo(conf.hx, item[conf.titulo])}
              </div>
              }
              <div className="card-body">
                  <p>
                    <span><strong>Resumen:</strong></span> {item[conf.resumen]}<br />
                    {item.autores.length == 1 
                    ?<> <span className=""><strong>Autor(a): </strong></span>{item.autores[0].nombre} {item.autores[0].apellido1} {item.autores[0].apellido2}<br /></>
                    :
                    <> 
                     <span className=""><strong>Autoras(es): </strong></span>
                     {item.autores.map((autor, i) => (
                       <>
                          <span>{autor.nombre} </span>
                          {autor.apellido2 
                          ?<>
                            <span>{autor.apellido1} </span>
                            <span>{autor.apellido2}</span>
                          </>
                          :
                          <>
                            <span>{autor.apellido1}</span>
                          </>
                          }
                          {i !== item.autores.length-1 && <span>, </span>}
                       </>
                     ))
                      }
                      <br />
                    </>
                    }
                    
                    <span className=""><strong>Páginas:</strong></span> {item[conf.paginas]}<br />
                    <a className="link-articulos" href= {item[conf.pdf]} target="_blank">PDF</a> / <a className="link-articulos" href= {item[conf.epub]} target="_blank">EPUB</a> / <a className="link-articulos" href= {item[conf.html]} target="_blank">HTML</a><br />
                  </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  