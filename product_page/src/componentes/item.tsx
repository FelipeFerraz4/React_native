import React from 'react';
import {Text, Image} from 'react-native';

export default function Item({nome, image}) {
  return (
    <>
      <Text>{nome}</Text>
      <Image source={image} />
    </>
  );
}
