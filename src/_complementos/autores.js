  export default function obtenerAutores(id, data) {
    let autores = [];
    dataAutores.forEach(element => {
      if (element.id_articulo == idArticulo) {
        autores.push(element);
      }
    });
    return autores;
  };