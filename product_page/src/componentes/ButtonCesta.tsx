import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ButtonCesta({
  texto,
  onPress,
  style,
}): React.JSX.Element {
  return (
    <>
      <TouchableOpacity style={[styleButton.botao, style]} onPress={onPress}>
        <Text style={styleButton.botaoText}>{texto}</Text>
      </TouchableOpacity>
    </>
  );
}

const styleButton = StyleSheet.create({
  botao: {
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  botaoText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
