import React from 'react';
import {ScrollView, View, StyleSheet, Text, Image} from 'react-native';
import Topo from '../componentes/topo';
import Detalhes from '../componentes/detalhes';

import Tomate from '../../assets/frutas/Tomate.png';
import Abobora from '../../assets/frutas/Abóbora.png';
import Batata from '../../assets/frutas/Batata.png';
import Brocolis from '../../assets/frutas/Brócolis.png';
import Pepino from '../../assets/frutas/Pepino.png';

export default function Cesta_de_verdura({
  topo,
  description,
}): React.JSX.Element {
  return (
    <ScrollView>
      <Topo {...topo} />
      <View style={style_page.cesta}>
        <Detalhes {...description} />
        <Text style={style_page.fruteTitle}>Lista de itens</Text>
        <View>
          <View style={style_page.frute}>
            <Image source={Tomate} style={style_page.fruteImage} />
            <Text style={style_page.fruteText}>Tomate</Text>
          </View>
          <View style={style_page.frute}>
            <Image source={Abobora} style={style_page.fruteImage} />
            <Text style={style_page.fruteText}>Abobora</Text>
          </View>
          <View style={style_page.frute}>
            <Image source={Batata} style={style_page.fruteImage} />
            <Text style={style_page.fruteText}>Batata</Text>
          </View>
          <View style={style_page.frute}>
            <Image source={Brocolis} style={style_page.fruteImage} />
            <Text style={style_page.fruteText}>Brócolis</Text>
          </View>
          <View style={style_page.frute}>
            <Image source={Pepino} style={style_page.fruteImage} />
            <Text style={style_page.fruteText}>Pepino</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const style_page = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  fruteTitle: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  frute: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    alignItems: 'center',
  },
  fruteImage: {
    width: 46,
    height: 46,
  },
  fruteText: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  },
});
