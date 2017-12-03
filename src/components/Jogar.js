import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//const logo = require('./src/imgs/logo.png');


export default class Jogar extends Component {
  render() {
    return (
      <View style={styles.viewParent} >    
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
