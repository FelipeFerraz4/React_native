import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Estrela from './estrela';

export default function Estrelas({
  quantidade: quantidadeAntida,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntida);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={i}
          onPress={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
        />,
      );
    }

    return listaEstrelas;
  };

  return (
    <View style={style_estrela.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const style_estrela = StyleSheet.create({
  estrelas: {
    flexDirection: 'row',
  },
});
