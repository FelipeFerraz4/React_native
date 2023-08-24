import React from 'react';
import Tela_produto from './src/telas/Cesta_de_Verduras';

import mock from './src/mocks/cesta_page';

function App(): JSX.Element {
  return <Tela_produto topo={mock.topo} description={mock.detalhe} />;
}

export default App;
