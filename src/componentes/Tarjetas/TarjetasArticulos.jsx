import ContTarjetasArticulos from "./ContTarjetasArticulos";

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
    const handlerClick=(e)=> {
      console.log("e", e.currentTarget.id);
      let url =  e.currentTarget.id
      window.gtag('event', 'Descarga PDF', {
        'event_category' : 'Descargas',
        'event_label' : 'Artículo',
        'event_file' : e.currentTarget.id,
      });
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
                  {item[conf.resumen] &&
                    <><span><strong>Resumen: </strong>{item[conf.resumen]}</span><br /></>
                  }
                    {item.autores.length == 1 
                    ?<> <span className=""><strong>Autor(a): </strong></span>{item.autores[0].nombre} {item.autores[0].apellido1} {item.autores[0].apellido2}<br /></>
                    :
                    <> 
                     <span className=""><strong>Autoras(es): </strong></span>
                     {item.autores.map((autor, i) => (
                       <span key={"itemautores"+i}>
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
                       </span>
                     ))
                      }
                      <br />
                    </>
                    }
                    
                    <span className=""><strong>Páginas:</strong></span> {item[conf.paginas]}<br />
                    <span id= {item[conf.pdf]} className="link-articulos" onClick= {handlerClick} > <a className="link-articulos" href= {item[conf.pdf]} target="_blank">PDF</a> / </span>
                    <span id= {item[conf.html]} className="link-articulos" onClick= {handlerClick} ><a className="link-articulos" href= {item[conf.html]} target="_blank">HTML / </a></span>
                    <span id= {item[conf.epub]} className="link-articulos" onClick= {handlerClick}><a className="link-articulos" href= {item[conf.epub]} target="_blank">EPUB</a>  </span>
                    <br />
                    {/* <a className="link-articulos" onClick = {handlerClick} href= {item[conf.pdf]} target="_blank">PDF</a> / <a className="link-articulos" href= {item[conf.epub]} target="_blank">EPUB</a> / <a className="link-articulos" href= {item[conf.html]} target="_blank">HTML</a><br /> */}
                  </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  