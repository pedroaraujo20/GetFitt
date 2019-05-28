import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Menu extends Component {
    static navigationOptions = {
        title: 'MENU',
        tabBarIcon: () => {
            return(
                <Image source={require('../assets/menu-S-light.png')}/>
            );
        }
    };
    render() {
        return (
            <View>
                <Text>Menu</Text>
            </View>
        );
    }
}
