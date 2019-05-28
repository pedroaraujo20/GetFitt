import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Dados extends Component {
    static navigationOptions = {
        title: 'DADOS',
        tabBarIcon: () => {
            return(
                <Image source={require('../assets/Stats.png')}/>
            );
        }
    }
    render() {
        return (
            <View>
                <Text>Dados Pessoais</Text>
            </View>
        );
    }
}

