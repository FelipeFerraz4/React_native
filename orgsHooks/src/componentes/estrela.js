import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import estrela from '../assests/estrela.png';
import estrelacinza from '../assests/estrelaCinza.png';

export default function Estrela({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const style_estrela = style_estrelaFunction(grande);

  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelacinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image source={getImagem()} style={style_estrela.estrela} />
    </TouchableOpacity>
  );
}

const style_estrelaFunction = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
