import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Msg extends Component {
    static navigationOptions = {
        title: 'MSG',
        tabBarIcon: () => {
            return(
                <Image source={require('../assets/email.png')}/>
            );
        }
    }

    render() {
        return (
            <View>
                <Text>Mensagens</Text>
            </View>
        );
    }
}

