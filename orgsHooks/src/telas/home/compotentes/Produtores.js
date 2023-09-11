import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

export default function Produtores({topo: Topo}) {
  const [Titulo, Lista] = useProdutores();

  // eslint-disable-next-line react/no-unstable-nested-components
  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={style_produtores.titulo}>{Titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={Lista}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
}

const style_produtores = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
