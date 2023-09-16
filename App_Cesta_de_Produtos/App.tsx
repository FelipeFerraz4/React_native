import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

//import Home from './src/telas/Home';
import MelhoresProdutores from './src/telas/MelhoresProdutores';

export default function App() {
  return (
    <SafeAreaView style={styleApp.page}>
      <StatusBar />
      <MelhoresProdutores />
    </SafeAreaView>
  );
}

const styleApp = StyleSheet.create({
  page: {
    flex: 1,
  },
});
