import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import Texto from '../Componentes/Texto';

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhe da cesta</Text>

      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.image_fazenda} />
          <Text style={estilos.nome_fazenda}>Jenny Jack Farm</Text>
        </View>

        <Texto style={estilos.descrition}>
          Um cesta com produtos selecionados cuidadosamente da fazenda, direto
          direto para sua cozinha.
        </Texto>
        <Text style={estilos.price}>R$ 40,00</Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  nome_fazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'Montserrat',
    fontWeight: '400',
  },
  image_fazenda: {
    width: 32,
    height: 32,
  },
  descrition: {
    color: '#A3A3A3',
    fontSize: 20,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
