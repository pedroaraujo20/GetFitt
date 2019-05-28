import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableHighlight, FlatList} from 'react-native';
import TreinoItem from './TreinoItem';
import {LinearGradient} from 'expo';
import FooterAppImage from '../assets/Rectangle.png';
import { Footer } from '../styles';

export class Header extends Component {
    modalTreino() {

    }
    render() {
        return(
            <View style={styles.header}>
                <LinearGradient colors={['#7B60E1', '#434489']} style={{ flex:1, padding:20}}>                    
                <Text style={styles.headerh1}>Criar Treino</Text>
                <Text style={styles.headerh2}>Adicione Exercícios a sua seção de treinos</Text>
                <View style={styles.headerSearchSection}>
                    <Image style={styles.searchIcon} source={require('../assets/ic-search.png')}/>
                    <TextInput style={styles.inputHeader} placeholder="Digite o nome do exercício ..."
                    underlineColorAndroid="transparent" placeholderTextColor='#7869FF'/>
                    <TouchableHighlight onPress={this.modalTreino}>
                    <Image style={styles.filterIcon} source={require('../assets/ic-filter.png')}/>
                    </TouchableHighlight>
                </View>
                </LinearGradient>                
            </View>
        );
    }
};

export class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista:[
                {
                    key:'1',
                    imagem: require('../assets/Foto.png'),
                    nome: "Supino Reto Inclinado",
                    grupo: 'Peito',
                    button: require('../assets/AddUsado.png')
                },
                {
                    key:'2',
                    imagem: require('../assets/Foto.png'),
                    nome: "Rosca Direta",
                    grupo: 'Peito',
                    button: require('../assets/Add.png')
                },
                {
                    key:'3',
                    imagem: require('../assets/Foto.png'),
                    nome: "Triceps Corda",
                    grupo: 'Peito',
                    button: require('../assets/Add.png')
                },
                {
                    key:'4',
                    imagem: require('../assets/Foto.png'),
                    nome: "Supino Reto",
                    grupo: 'Peito',
                    button: require('../assets/Add.png')
                },
                {
                    key:'5',
                    imagem: require('../assets/Foto.png'),
                    nome: "Triceps Polia",
                    grupo: 'Triceps',
                    button: require('../assets/Add.png')
                }
            ]
        };
    }
    render () {
        return(
            <View>
                <View>
                        <FlatList
                        data={this.state.lista}
                        renderItem={({item}) => <TreinoItem data = {item}/>}
                        />                    
                </View>
            </View>
        );
    }
}

export default class Treino extends Component {
    static navigationOptions = {
        title: 'TREINO',
        tabBarIcon: () => {
            return(
                <Image source={require('../assets/DUMBBELL.png')}/>
            );
        }        
    };
    render() {
        return (
            <View>
                <Header/>
                <Body/>
            </View>
        );
    }
}

const styles = StyleSheet.create({    
    header:{
        width: 444,
        height: 199,
        marginTop:24
    },
    headerh1:{
        fontSize:30,
        //fontFamily: 'Rubik',
        fontWeight: '500',
        color: '#FFFFFF',        
        marginRight: '55.07%',
        marginTop: '5%'
    },
    headerh2:{
        fontSize:16,
        //fontFamily:'Rubik',
        fontWeight: 'normal',
        fontStyle: 'normal',
        marginTop: 10,
        width: 379,
        height: 24,
        color:'#FFFFFF'
    },
    headerSearchSection:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon:{
        marginRight: -30,
    },
    inputHeader:{
        borderColor:'#7869FF',
        borderWidth:2,
        borderRadius:15,
        width: 379,
        height: 43,
        paddingLeft: 35,
        fontSize: 16,
        //fontFamily:'Rubik',
        lineHeight:19,
        letterSpacing: 0.228571
    },
    filterIcon:{
        marginLeft: -40
    }
});