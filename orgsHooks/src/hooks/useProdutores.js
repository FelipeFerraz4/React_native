import {useState, useEffect} from 'react';

import {carregaProdutores} from '../serviços/carregaDados';

export default function useProdutores() {
  const [Titulo, setTitulo] = useState('');
  const [Lista, setLista] = useState([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    retorno.lista.sort(
      (produtor1, produtor2) => produtor2.estrelas - produtor1.estrelas,
    );
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
    console.log(retorno);
  }, []);

  return [Titulo, Lista];
}
