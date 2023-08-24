import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  description,
  price,
}) {
  return (
    <>
      <Text style={style_detalhes.nome}>{nome}</Text>
      <View style={style_detalhes.fazenda}>
        <Image source={logoFazenda} style={style_detalhes.image_fazenda} />
        <Text style={style_detalhes.nome_fazenda}>{nomeFazenda}</Text>
      </View>
      <Text style={style_detalhes.descrition}>{description}</Text>
      <Text style={style_detalhes.price}>{price}</Text>
    </>
  );
}

const style_detalhes = StyleSheet.create({
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
  },
  image_fazenda: {
    width: 32,
    height: 32,
  },
  descrition: {
    color: '#A3A3A3',
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
