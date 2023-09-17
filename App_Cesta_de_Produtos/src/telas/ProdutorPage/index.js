import React from 'react';
import {useRoute} from '@react-navigation/native';
import {StyleSheet, FlatList, View, Image, Text} from 'react-native';

import Cesta from './componentes/Cesta';
import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import topoImagem from '../../assets/produtores/topo.png';

function TopoLista() {
  const {tituloProdutor, tituloCestas} = useTextos();
  const route = useRoute();
  const {nome, imagem, cestas} = route.params;
  return (
    <>
      <Topo titulo={tituloProdutor} imagem={topoImagem} altura={150} />
      <View style={estilos.conteudo}>
        <View style={estilos.logo}>
          <Image source={imagem} style={estilos.produtorImage} />
          <Text style={estilos.produtor}>{nome}</Text>
        </View>
        <Text style={estilos.cestas}>{tituloCestas}</Text>
      </View>
    </>
  );
}

function ProdutorPage() {
  const route = useRoute();
  //console.log(route.params);
  const {nome, imagem, cestas} = route.params;

  return (
    <FlatList
      ListHeaderComponent={TopoLista}
      data={cestas}
      renderItem={({item}) => <Cesta {...item} produtor={{nome, imagem}} />}
      style={estilos.lista}
    />
  );
}

export default ProdutorPage;

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  conteudo: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  produtorImage: {
    width: 62,
    height: 62,

    marginTop: -23,

    borderRadius: 6,
  },
  produtor: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  cestas: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
});
