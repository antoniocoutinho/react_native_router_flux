import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Rotas from './src/Rotas'

export default class react_native_router_flux extends Component {
  render() {
    return (
      <Rotas/>      
    );
  }
}
AppRegistry.registerComponent('react_native_router_flux', () => react_native_router_flux);
