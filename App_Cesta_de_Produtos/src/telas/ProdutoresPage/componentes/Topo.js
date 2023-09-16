import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import logo from '../../../assets/logo.png';
import useTextos from '../../../hooks/useTextos';

export default function Topo({melhoresProdutores}) {
  const {boasVindas, legenda, legendaMelhoresProdutores} = useTextos();

  return (
    <>
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>
          {melhoresProdutores ? '' : boasVindas}
        </Text>
        <Text style={estilos.legenda}>
          {melhoresProdutores ? legendaMelhoresProdutores : legenda}
        </Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
  },
  compraMensagem: {
    fontSize: 16,
    lineHeight: 26,
    color: '#454545',
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 10,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    fontSize: 20,
    lineHeight: 26,
    color: '#000',
  },
});
