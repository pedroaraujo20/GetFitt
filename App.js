import React, {Component} from 'react';
//import {} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Treino from './src/screens/Treino';
import Dados from './src/screens/Dados';
import Menu from './src/screens/Menu';
import Msg from './src/screens/Msg';
import Perfil from './src/screens/Perfil';

const AppBottomTabNavigator = createBottomTabNavigator({
  Treino:{
    screen:Treino
  },
  Dados:{
    screen:Dados
  },
  Menu:{
    screen:Menu
  },
  Msg:{
    screen:Msg
  },
  Perfil:{
    screen:Perfil
  }
},{
  animationEnabled:true,    
  tabBarOptions:{
    activeTintColor:'#6155CC',
    inactiveTintColor:'#6155CC',
    labelStyle: {
      fontSize: 12,
      fontWeight:'bold'
    }
  }
});

const AppContainer = createAppContainer(AppBottomTabNavigator);
export default class GetFitt extends Component {
  render() {
    return(
      <AppContainer/>
    );
  }
}
