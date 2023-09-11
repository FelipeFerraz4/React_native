import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {carregaTopo} from '../../../serviços/carregaDados';
import Logo from '../../../assests/logo.png';

class Topo extends React.Component {
  state = {
    topo: {
      welcome: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({topo: retorno});
    //console.log(retorno);
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={style_topo.topo}>
        <Image source={Logo} style={style_topo.image} />
        <Text style={style_topo.welcome}>{this.state.topo.welcome}</Text>
        <Text style={style_topo.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const style_topo = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
