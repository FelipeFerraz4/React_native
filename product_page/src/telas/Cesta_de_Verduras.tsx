import React from 'react';
import {View, StyleSheet} from 'react-native';
import Topo from '../componentes/topo';
import Detalhes from '../componentes/detalhes';

export default function Cesta_de_verdura({
  topo = {titulo: string},
  description,
}): React.JSX.Element {
  return (
    <>
      <Topo {...topo} />
      <View style={style_page.cesta}>
        <Detalhes {...description} />
      </View>
    </>
  );
}

const style_page = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
