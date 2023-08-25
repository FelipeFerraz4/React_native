import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import ButtonCesta from './ButtonCesta';

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  description,
  price,
  botao,
}) {
  return (
    <>
      <Text style={style_detalhes.nome}>{nome}</Text>
      <View style={style_detalhes.fazenda}>
        <Image source={logoFazenda} style={style_detalhes.imageFazenda} />
        <Text style={style_detalhes.nome_fazenda}>{nomeFazenda}</Text>
      </View>
      <Text style={style_detalhes.descrition}>{description}</Text>
      <Text style={style_detalhes.price}>{price}</Text>
      <ButtonCesta
        texto={botao}
        style={style_detalhes.botao}
        onPress={() => {}}
      />
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
  imageFazenda: {
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
  botao: {
    marginTop: 10,
  },
});
