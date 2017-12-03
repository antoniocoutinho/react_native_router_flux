import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Jogar from './src/components/Jogar';
export default class react_native_router_flux extends Component {
  render() {
    return (
      <View>
        <Text>teste</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('react_native_router_flux', () => react_native_router_flux);
