import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

//const logo = require('./src/imgs/logo.png');
export default class OutrosJogos extends Component {
  render() {
    return (
      <View style={styles.viewParent}>
        <Text>Testando Cena jogo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewParent:{
    flex: 1,
    backgroundColor: '#61BD8C'
  }
})
