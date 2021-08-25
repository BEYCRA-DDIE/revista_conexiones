import Catalogo from "./componentes/Catalogo";
import ContenidoPrincipal from "./componentes/ContenidoPrincipal";
import Busqueda from "./componentes/Busqueda";
import Formulario from "./componentes/Formulario";

const dashboardRoutes = [
  {
    path: "/inicio",
    component: ContenidoPrincipal
  },
  {
    path: "/catalogo",
    component: Catalogo
  },
  {
    path: "/busqueda",
    component: Busqueda
  },
  {
    path: "/sucripcion",
    component: Formulario
  }
];

export default dashboardRoutes;
