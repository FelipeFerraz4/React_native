import React, {useState, useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Estrelas from '../../../componentes/estrelas';

const distanciaEmMetro = distancia => {
  console.log('distanciaEmMetro');
  return distancia + 'm';
};

export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [Selecionado, SetSelecionado] = useState(false);

  const distanciaTexto = useMemo(
    () => distanciaEmMetro(distancia),
    [distancia],
  );

  return (
    <TouchableOpacity
      style={style_produtor.cartao}
      onPress={() => SetSelecionado(!Selecionado)}>
      <Image
        source={imagem}
        style={style_produtor.image}
        accessibilityLabel={nome}
      />
      <View style={style_produtor.dados}>
        <View>
          <Text style={style_produtor.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={Selecionado}
            grande={Selecionado}
          />
        </View>
        <Text style={style_produtor.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style_produtor = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    //android
    elevation: 7,

    //ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  dados: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
