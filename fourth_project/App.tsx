import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styleHome.homepage}>
      <StatusBar />
      <View style={styleHome.header}>
        <Text style={styleHome.textoHeader}>Hello World!</Text>
        <TouchableOpacity style={styleHome.botao}>
          <Text style={styleHome.botaoTexto}>Pesquisa</Text>
        </TouchableOpacity>
      </View>
      <View style={styleHome.main}>
        <View>
          <Text style={styleHome.textoMain}>Hello World!</Text>
          <Text style={styleHome.textoMain}>Hello World!</Text>
          <Text style={styleHome.textoMain}>Hello World!</Text>
        </View>
        <View>
          <Text style={styleHome.textoMain}>Hello World!</Text>
          <Text style={styleHome.textoMain}>Hello World!</Text>
          <Text style={styleHome.textoMain}>Hello World!</Text>
        </View>
      </View>
      <View style={styleHome.footer}>
        <Text style={styleHome.textoFooter}>
          CopyLeft, nenhum direito reservado!!
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styleHome = StyleSheet.create({
  homepage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#012030',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#45C4B0',
  },
  main: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#DAFDBA',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#13678A',
  },
  botao: {
    backgroundColor: '#012030',
    padding: 10,
    margin: 20,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 20,
  },
  textoHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textoMain: {
    fontSize: 20,
    padding: 15,
    margin: 15,
    color: '#DAFDBA',
    backgroundColor: '#012030',
  },
  textoFooter: {
    fontSize: 20,
    color: '#DAFDBA',
  },
});
