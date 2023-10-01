import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import estilos from './estilos';
import {pegarRepositoriosDoUsuario} from '../../servicos/requisicoes/repositorios';
import {useIsFocused} from '@react-navigation/native';

export default function Repositorios({route, navigation}) {
  const [repo, setRepo] = useState([]);
  const estaNaTela = useIsFocused();

  useEffect(() => {
    async function pegarRepositorio() {
      const resultado = await pegarRepositoriosDoUsuario(route.params.id);
      setRepo(resultado);
    }
    pegarRepositorio();
  }, [estaNaTela, route.params.id]);

  return (
    <View style={estilos.container}>
      <Text style={estilos.repositoriosTexto}>
        {repo.length} repositórios criados
      </Text>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() =>
          navigation.navigate('CriarRepositorio', {id: route.params.id})
        }>
        <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
      </TouchableOpacity>

      <FlatList
        data={repo}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: '100%'}}
        keyExtractor={repokey => repo.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={estilos.repositorio}
            onPress={() => navigation.navigate('InfoRepositorio', {item})}>
            <Text style={estilos.repositorioNome}>{item.name}</Text>
            <Text style={estilos.repositorioData}>
              Atualizado em {item.data}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
