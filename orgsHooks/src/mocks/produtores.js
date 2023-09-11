import Green from '../assests/produtores/green.png';
import Salad from '../assests/produtores/salad.png';
import Jennyjack from '../assests/produtores/jennyjack.png';
import Grow from '../assests/produtores/grow.png';
import Potager from '../assests/produtores/potager.png';

const gerarNumerosAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: Green,
      distancia: gerarNumerosAleatorio(1, 500),
      estrelas: gerarNumerosAleatorio(1, 5),
    },
    {
      nome: 'Salad',
      imagem: Salad,
      distancia: gerarNumerosAleatorio(1, 500),
      estrelas: gerarNumerosAleatorio(1, 5),
    },
    {
      nome: 'Jennyjack',
      imagem: Jennyjack,
      distancia: gerarNumerosAleatorio(1, 500),
      estrelas: gerarNumerosAleatorio(1, 5),
    },
    {
      nome: 'Grow',
      imagem: Grow,
      distancia: gerarNumerosAleatorio(1, 500),
      estrelas: gerarNumerosAleatorio(1, 5),
    },
    {
      nome: 'Potager',
      imagem: Potager,
      distancia: gerarNumerosAleatorio(1, 500),
      estrelas: gerarNumerosAleatorio(1, 5),
    },
  ],
};

export default produtores;
