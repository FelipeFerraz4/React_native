import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Home from './src/telas/home';

function App() {
  return (
    <SafeAreaView style={style_app.tela}>
      <Home />
    </SafeAreaView>
  );
}

const style_app = StyleSheet.create({
  tela: {
    flex: 1,
  },
});

export default App;
