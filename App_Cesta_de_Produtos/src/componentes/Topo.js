import React from 'react';
import {Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import Texto from './Texto';

import Gradiente from '../assets/gradiente.png';
import topo from '../assets/topo.png';
import VoltarSVG from '../assets/VoltarBranco.png';

const largura = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

function Topo({titulo, imagem = topo, altura = ALTURA_PADRAO}) {
  const estilos = funcaoEstilos(altura);
  return (
    <>
      <Image source={imagem} style={estilos.topo} />
      <Image source={Gradiente} style={estilos.gradiente} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
      <TouchableOpacity onPress={() => {}} style={estilos.botaoVoltar}>
        <Image source={VoltarSVG} style={estilos.voltar} />
      </TouchableOpacity>
    </>
  );
}

export default Topo;

const funcaoEstilos = altura =>
  StyleSheet.create({
    topo: {
      width: '100%',
      height: altura,
    },
    gradiente: {
      width: largura,
      height: (130 / 360) * largura,
      position: 'absolute',
    },
    titulo: {
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 16,
    },
    botaoVoltar: {
      position: 'absolute',
      padding: 17,
    },
    voltar: {
      width: 24,
      height: 24,
    },
  });
