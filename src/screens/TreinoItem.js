import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import ExerciseImage from '../assets/Foto.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ImageExercise} from '../styles';

export default class TreinoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.clicou = this.clicou.bind(this);
    }
    clicou(){

    }   

    render() {
        return (            
                <View style={styles.area}> 
                <Image resizeMode="contain" source={this.props.data.imagem} style={styles.imagem}/>
                <View style={styles.areaInfo}>
                    <Text style={styles.nome}>{this.props.data.nome}</Text>
                    <Text style={styles.info}>{this.props.data.grupo}</Text>
                </View>
                <TouchableHighlight underlayColor="#ffffff" onPress={this.clicou}>
                    <Image source={this.props.data.button} style={styles.button}/>
                </TouchableHighlight>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    area: {
        flexDirection:'row',
        width:295,
        borderBottomWidth:2,
        borderColor: '#E0DDF5'
    },
    imagem: {
        width:70,
        height:63.73,
        marginTop:17,
        marginLeft:17,
        marginBottom:14      
    },
    button: {
        marginTop:36,
        marginRight:6,
        marginBottom:36
    },
    areaInfo: {
        flex:1,
        flexDirection: 'column',
        marginLeft:10,
        marginRight:10,
        marginTop:20
    },
    nome: {
        fontSize: 12,
        fontWeight:'normal',
        //fontFamily:'Rubik',
        color:'#6155CC',
        fontWeight:'500',
        marginBottom: 6
    },
    info: {
        color: '#6155CC',
        fontSize:12,
        width:45,
        paddingLeft:8, 
        paddingTop:4,       
        height:25,
        borderWidth:1,
        borderRadius:4,
        borderColor:'#6155CC'
    }
});