import React from 'react';
import {Text, View} from 'react-native';
import Item from './item';

export default function ListaItens({
  titulo,
  tomate,
  batata,
  brocolis,
  pepino,
  abobora,
}) {
  return (
    <>
      <Text>{titulo}</Text>
      <View>
        <Item {...tomate} />
        <Item {...batata} />
        <Item {...brocolis} />
        <Item {...pepino} />
        <Item {...abobora} />
      </View>
    </>
  );
}
