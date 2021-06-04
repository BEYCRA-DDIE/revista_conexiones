import React, {useState, useEffect} from 'react';
import Encabezado from './componentes/Encabezado';
import Menu from './componentes/Menu';
import ContenidoPrincipal from './componentes/ContenidoPrincipal';
import PiePagina from './componentes/PiePagina';

function App() {
  const [componente, setComponente] = useState(<ContenidoPrincipal/>)
  return (
    <div>
      <Encabezado/>
      <Menu />
      {componente}
      <PiePagina/>
    </div>
  );
}

export default App;
