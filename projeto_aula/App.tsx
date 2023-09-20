import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

function App() {
  const [Data, SetDados] = useState([]);

  return (
    <SafeAreaView style={stylePage.page}>
      <StatusBar />
      <View>
        <Text style={stylePage.tituloPage}>Aula De Requisição </Text>
        <TouchableOpacity
          style={stylePage.BotaoBusca}
          onPress={async () => {
            const {data} = await axios.get(
              'https://sci01-ter-jne.ufca.edu.br/cppgi/api/avaliacoes/2370/1/TODAS',
            );
            SetDados(data);
          }}>
          <Text style={stylePage.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {Data.map(item => {
          return (
            <Text style={stylePage.titulos} key={item.id}>
              {item.titulo}
            </Text>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const stylePage = StyleSheet.create({
  page: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  BotaoBusca: {
    width: 400,
    height: 40,
    backgroundColor: '#A0A0DF',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  textoBotao: {
    color: 'white',
  },
  tituloPage: {
    fontSize: 25,
    lineHeight: 30,
    marginVertical: 10,
  },
  titulos: {
    marginVertical: 20,
    marginHorizontal: 10,
    color: 'black',
  },
});
