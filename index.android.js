import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado';

export default class react_native_router_flux extends Component {
  render() {
    return (
      <Router sceneStyle={{paddingTop: 50}}>
        <Scene key='principal' component={Principal} initil title='Cara ou Coroa'/>
        <Scene key='sobrejogo' component={SobreJogo} title='Sobre o Jogo'/>
        <Scene key='outrosjogos' component={OutrosJogos} title='Outros Jogos'/>
        <Scene key='resultado' component={Resultado} title='Resultado'/>
      </Router>
    );
  }
}
AppRegistry.registerComponent('react_native_router_flux', () => react_native_router_flux);
