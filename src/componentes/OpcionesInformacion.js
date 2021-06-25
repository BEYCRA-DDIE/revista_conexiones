import React from "react";

import ContModalMenu from "./Modal/ContModalMenu";

export default function OpcionesInformacion(props) {
  var jsxInformacion = null,
    jsxAsesor = null,
    jsxEditorial = null,
    jsxPasos = null,
    jsxNormas = null,
    jsxData = null;

  jsxInformacion = (
    <>
      <h1>Información General</h1>
      <hr />
      <h2>Objetivo</h2>
      <p>
        El objetivo, de la revista del Ministerio de Educación Pública
        Conexiones: una experiencia más allá del aula, es propiciar un espacio
        en donde se reúnan las ideas, pensamientos y sentires, que enriquezcan y
        fortalezcan, a toda la comunidad educativa costarricense e
        internacional. Asimismo, se pretende que la revista sea un punto de
        encuentro para el análisis, la reflexión y discusión de los aportes
        significativos que se realizan en los diferentes escenarios educativos.
      </p>
      <h2>Visión</h2>
      <p>
        Servir como una herramienta didáctica que contribuya a posicionar el
        panorama social de los procesos educativos en Costa Rica y el mundo y la
        repercusión en el proceso de enseñanza-aprendizaje.
        <br />
        Lo anterior mediante la utilización del lenguaje escrito para indagar en
        los espacios cognitivos que involucran a los miembros de la comunidad
        educativa; además, colaborar con otros entornos investigativos que
        deseen dar a conocer sus aportes en las diversas áreas del currículo.
      </p>
      <h2>Misión</h2>
      <p>
        Ser una plataforma tecnológica, para que todos los docentes del país y
        del mundo, logren plasmar sus experiencias en el aula. También, promover
        el conocimiento propuesto por otras entidades académicas, para que sea
        utilizado por la comunidad educativa.
      </p>
    </>
  );
  jsxEditorial = (
    <>
      <h1>Comité editorial</h1>
      <hr />
      <h2>Coordinación</h2>
      <p>María del Pilar Sánchez Madrigal</p>
      <h2>Integrantes</h2>
      <ul>
        <li>Roberto Brenes López</li>
        <li>Jeffrey Cambronero Durán</li>
        <li>Vanessa Campos Jiménez</li>
        <li>Mariana Molina Rojas</li>
        <li>María del Pilar Sánchez Madrigal</li>
        <li>Esmeralda Zúñiga Vargas</li>
      </ul>
    </>
  );

  jsxAsesor = (
    <>
      <h1>Comité asesor</h1>
      <ul>
        <li>
          Jorge Ballestero Rojas. Centro de Investigación y Docencia en
          Investigación, Universidad Nacional
        </li>
        <li>
          Jinny Cascante Ramírez. Centro de Investigaciones en Educación,
          Universidad Estatal a Distancia
        </li>
        <li>
          Linda Madriz Bermúdez. Escuela Ciencias de la Educación, Universidad
          Estatal a Distancia
        </li>
        <li>
          Guiselle María Garbanzo Vargas. Facultad de Educación, Universidad de
          Costa Rica
        </li>
        <li>
          Alexánder Jesús Porras Sibaja. Centro de Formación Pedagógica y
          Tecnología Educativa, Universidad Técnica Nacional
        </li>
        <li>Rebecca Vieyra. Universidad de Maryland</li>
      </ul>
    </>
  );
  jsxNormas = (
    <>
      <h1>Normas de publicacion</h1>
      <hr />
      <ol>
        <li className="lh-base">
          La calidad del contenido del artículo debe reflejar aspectos
          innovadores y actualizados sobre tendencias educativas; tomando en
          cuenta, además, las líneas estratégicas del Ministerio de Educación
          Pública y otras aproximaciones importantes en la educación a nivel
          internacional.{" "}
        </li>
        <li className="lh-base">
          Es muy importante, que no haya sido publicado anteriormente en otra
          revista educativa, es decir, sea inédito.{" "}
        </li>
        <li className="lh-base">
          Todo artículo debe enviarse al correo electrónico
          revistaconexiones@mep.go.cr; para una revisión de su atinencia por
          parte del Comité Editorial.{" "}
        </li>
        <li className="lh-base">
          Los artículos deben enviarse en formato digital, utilizando el formato
          con letra Arial 12, a espacio y medio.{" "}
        </li>
        <li className="lh-base">
          Si el texto incluye imágenes, fotografías o ilustraciones, estas deben
          enviarse en formato JPG, con una resolución no menor a 300 dpi, y con
          un tamaño mínimo de 470 x 520 pixeles en una carpeta adjunta al texto.
          (Si las imágenes, fotografías e ilustraciones no son del dominio
          público, su inclusión en el texto debe tener los permisos del autor
          (a) correspondientes; además, de incluir una nota aclaratoria en la
          parte inferior de las imágenes).
        </li>
        <li className="lh-base">
          Si se utilizan imágenes de personas adultas o personas menores de edad
          deben tener el consentimiento informado de imagen.
        </li>
        <li className="lh-base">
          La extensión del artículo debe tener un mínimo seis páginas y máximo
          de diez; (en algunos casos, el comité editorial determinará la
          publicación de artículos que no cuenten con la cantidad de páginas
          establecidas).{" "}
        </li>
        <li className="lh-base">
          Debe incorporarse un resumen en español y su respectiva traducción en
          inglés (abstract) que no sobrepase las 60 palabras, donde se destaquen
          los principales aspectos del artículo; así como, una síntesis de las
          aplicaciones y conclusiones que aporta.{" "}
        </li>
        <li className="lh-base">
          Para la elaboración del resumen, se aplicará la norma ISO 214-1976.
          (Norma UNE 50-103-90) la cual especifica lo siguiente:
        </li>
        <ul>
          <li>Ubicación del resumen en la parte superior del documento.</li>
          <li>
            Se comenzará con una frase que contenga la idea principal del
            documento.
          </li>
          <li>Un solo párrafo.</li>
          <li>Voz activa y en tercera persona.</li>
        </ul>
        <li className="lh-base">
          Además del resumen, debe incluirse un mínimo de tres palabras claves
          (keywords), y un máximo de cinco, en español y en inglés, en orden
          alfabético.
        </li>
        <li className="lh-base">
          Debe utilizarse el formato de la American Psychological Association
          (APA), para las citas y las referencias bibliográficas. Se recomienda
          omitir las notas aclaratorias, las citas al pie de página, las cuales
          deben incorporarse dentro del artículo enviado.
        </li>
      </ol>
      <div className="d-flex bd-highlight mb-3 align-content-center">
        <div className="me-auto p-4 bd-highlight"></div>
        <div className="p-2 bd-highlight">
          <a
            className="btn btn-success"
            href="./assets/files/normas_editoriales.pdf"
            target="_blank"
            role="button"
          >
            Descargar archivo
          </a>
        </div>
      </div>
    </>
  );
  jsxPasos = (
    <>
      <h1>Pasos para publicar</h1>
      <ol>
        <li className="lh-base">
          Realizar el artículo sobre un tema referente a la educación en sus
          múltiples modalidades, disciplinas y consideraciones.{" "}
        </li>
        <li className="lh-base">
          Revisar las normas editoriales dadas por la Revista y enviar el
          documento aplicando estas.{" "}
        </li>
        <li className="lh-base">
          Enviar el artículo para revisión del comité editorial al correo{" "}
          <a href="mailto:revistaconexiones@mep.go.cr">
            revistaconexiones@mep.go.cr
          </a>{" "}
        </li>
        <li className="lh-base">
          El Comité Editorial revisará la pertinencia y el cumplimiento de las
          normas en el artículo y le indicará su atinencia para la Revista.
        </li>
      </ol>
    </>
  );

  switch (props.opcion) {
    case 0:
      jsxData = jsxInformacion;
      break;
    case 1:
      jsxData = jsxEditorial;
      break;
    case 2:
      jsxData = jsxAsesor;
      break;
    case 3:
      jsxData = jsxNormas;
      break;
    case 4:
      jsxData = jsxPasos;
      break;
    default:
      break;
  }

  return <div className="container mt-2 m-4">{jsxData}</div>;
}
