import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Perfil extends Component {
    static navigationOptions = {
        title: 'PERFIL',
        tabBarIcon: () => {
            return(
                <Image source={require('../assets/User.png')}/>
            );
        }
    }

    render() {
        return (
            <View>
                <Text>Perfil</Text>
            </View>
        );
    }
}

