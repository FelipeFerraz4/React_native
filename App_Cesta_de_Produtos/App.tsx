import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import AppRotasTab from './src/rotas/AppRotasTab';

export default function App() {
  return (
    <SafeAreaView style={styleApp.page}>
      <StatusBar />
      <AppRotasTab />
    </SafeAreaView>
  );
}

const styleApp = StyleSheet.create({
  page: {
    flex: 1,
  },
});
