import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';

export default function Produtores({melhoresProdutores}) {
  const navigation = useNavigation();
  const route = useRoute();
  const [ExibirMensagem, setExibirMensagem] = useState();

  const compraFeita = route.params?.compra.nome;
  console.log(compraFeita);
  const timestampCompra = route.params?.compra.timestamp;
  console.log(timestampCompra);

  const lista = useProdutores(melhoresProdutores);
  const {tituloProdutores, mensagemCompra} = useTextos();
  const mensagemCompleta = mensagemCompra?.replace('$NOME', compraFeita);

  useEffect(() => {
    setExibirMensagem(!!compraFeita);

    let timeout;

    if (compraFeita) {
      timeout = setTimeout(() => {
        setExibirMensagem(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timestampCompra]);

  // eslint-disable-next-line react/no-unstable-nested-components
  const TopoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        {ExibirMensagem && (
          <Text style={estilos.compra}>{mensagemCompleta}</Text>
        )}
        <Text style={estilos.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => (
        <Produtor
          {...item}
          aoPressionar={() => {
            navigation.navigate('ProdutorPage', item);
          }}
        />
      )}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
      style={estilos.lista}
    />
  );
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16,
    lineHeight: 26,
  },
});
