import React from 'react';
import {Image, Text, Dimensions, StyleSheet} from 'react-native';
import topo from './../../assets/topo.png';
const width = Dimensions.get('screen').width;

export default function Topo({titulo}) {
  return (
    <>
      <Image source={topo} style={style_page.topo} />
      <Text style={style_page.titulo}>{titulo}</Text>
    </>
  );
}

const style_page = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width,
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
});
