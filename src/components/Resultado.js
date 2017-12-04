
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');



export default class Resultado extends Component {
    constructor(props){
        super(props)
        this.state = {  resultado: ''};
    }

    componentWillMount(){
            var numeroAleatorio = Math.floor(Math.random() * 2);
            let caraOuCoroa = '';
            if (numeroAleatorio === 0){
                caraOuCoroa = 'cara'
            } else {
                caraOuCoroa = 'coroa'
            }

            this.setState({resultado: caraOuCoroa });
              
    }
    
  render() {
    if (this.state.resultado === 'cara') {
            return (
                <View style={styles.resultado}>
                    <Image source={cara}/>
                    <Text>{this.state.resultado}</Text>
                </View>
            );
    
        }
        
            return (
                <View style={styles.resultado}>
                        <Image source={coroa}/>
                        <Text>{this.state.resultado}</Text>
                </View>
                );
    } 
}

const styles = StyleSheet.create({
  resultado:{
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
})
